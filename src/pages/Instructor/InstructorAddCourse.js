import React from 'react'
import Navbar from "../../components/Navbar/NavSupplier";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Card from '@mui/material/Card';
import { FooterContainer } from '../../components/Footer/FooterContainer';

import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import axios from 'axios';
import baseURL from '../../config';

const useStyles = makeStyles((theme) => ({
    formStyle: {
        paddingRight: 50,
        paddingLeft: 50,
        paddingTop: 15,
        paddingBottom: 15,
        border: '0.5px solid black',
      },   

}));

export default function InstructorAddCourse() {
    const classes = useStyles();
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [duration, setDuration] = useState("");
    const [cost, setCost] = useState("");
    const [images, setImages] = useState("");
    const [URL, setURL] = useState("");
    const [videoName, setVideoName] = useState("");
    const url = baseURL+"/courses/create"
    let navigate = useNavigate();

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const durationChangeHandler = (event) => {
        setDuration(event.target.value);
    }

    const costChangeHandler = (event) => {
        setCost(event.target.value);
    }

    const imagesChangeHandler = (event) => {
        setImages(event.target.value);
    }

    const URLChangeHandler = (event) => {
        setURL(event.target.value);
    }

    const videoNameChangeHandler = (event) => {
        setVideoName(event.target.value);
    }

    


    const onSubmitHandler = (event) => {
        console.log("onSubmitHandler START");
        event.preventDefault();
        console.log(event.target.value);
        let courseJson = {
            "name": name,
            "description": description,
            "duration": duration,
            "cost": cost,
            "images": [images],
            "videos": [{
                "url": URL,
                "name": videoName
            }]
        };
        axios.post(url, courseJson).then( res => {
            console.log("SUCCESS!")
            alert("Success! Your course has been added.")
            navigate('/instructor/addCourses');
        }).catch(err => {
            alert("Something went wrong: ", err.response.data);
        });
    }


    return (
        <div>
            <Navbar />
            <Card>
                <Box padding="2rem" bgcolor={"#fff"}>
                    <h3>Enter Course Details:
                    </h3>
                    <div style={{verticalAlign:"middle", textAlign: "center"}}>
                        <form className={classes.formStyle} onSubmit={onSubmitHandler}>
                            <label>Name: </label>
                            <input type="text" placeholder='Name' required onChange={nameChangeHandler}/><br></br>
                            <label>Description: </label>
                            <input type="description" placeholder='Description'  required onChange={descriptionChangeHandler}/><br></br>
                            <label>Duration: </label>
                            <input type="number" placeholder='Duration'  required onChange={durationChangeHandler}/><br></br>
                            <label>Cost: </label>
                            <input type="number" placeholder='Cost'  required onChange={costChangeHandler}/><br></br>
                            <label>Image Link: </label>
                            <input type="text" placeholder='Image Link'  required onChange={imagesChangeHandler}/><br></br>
                            <p>Video Details</p>
                            <label>Video URL: </label>
                            <input type="text" placeholder='Video URL'  required onChange={URLChangeHandler}/><br></br>
                            <label>Video Title: </label>
                            <input type="text" placeholder='Video Title'  required onChange={videoNameChangeHandler}/><br></br>
                            <input type="reset" />
                            <input type="submit" />
                        </form>
                    </div>
                </Box>
            </Card>
            <FooterContainer />
        </div>
    );

}