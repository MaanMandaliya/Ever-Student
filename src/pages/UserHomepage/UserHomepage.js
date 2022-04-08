import React, { useEffect,useState } from 'react'
import { Container, ContentContainer, Content, CssTextField, SearchBar as SearchBarContainer,
FlexContainer, MainContent, RecipeContainer, NoResults, AccordionContainer, FilterContainer  } from './UserHomepage.style'
import Navbar from '../../components/Navbar/NavUser';
import { FooterContainer } from '../../components/Footer/FooterContainer';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from '@mui/icons-material/Search';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import axios from 'axios';
import baseURL from '../../config';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { cloneDeep } from 'lodash';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import {Table, TableBody, TableCell, TableHead, TableRow} from "@material-ui/core";

const theme = createTheme();
const styles = {
	fullHeightCard: {
		height: "100%",
	},
}

function Enroll (course)
{
    const [isError, setIsError] = useState(false);
    console.log(course);
    useEffect(() =>
    {
        let config = {
            headers: {
                authorization: "Bearer " + localStorage.getItem("token"),
            }
        }
        let data = {
            userId: localStorage.getItem("userId"),
            courseId: course
        }
        const enroll = baseURL + 'users/enroll';
        axios.post(enroll, data, config).then((data) =>
        {
            console.log(data);
            if (data.status) {
                //alert("Enrolled");
            }
            else {
                setIsError(true)
            }
        })
    }, []);
}

function UserHomepage() {

  let navigate = useNavigate();

const routeChange = () =>{ 
    let path = '/supplier/orders'; 
    navigate(path);
  }

  const [sortBy, setSortKey] = React.useState('');
  const [showdata, setShowData] = useState([]);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

    useEffect(() => {
      let config = {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        }
      }
      let data = {
          userId: localStorage.getItem("userId")
      }
      console.log(config.headers.authorization + "\n" + data.userId);
      const getCoursesURL = baseURL + 'users/getCourses';
      const allCourses = baseURL + 'courses/list';
      axios.post(getCoursesURL, data, config)
      .then((data) => {
          console.log(data);
          if (data.status) {
          setShowData(data.data)
        }
        else {
          setIsError(true)
        }
      })
    axios.get(allCourses, config).then((data) => {
        console.log(data);
        if(data.status) {
            setData(data.data)
        }
    })
    }, []);
    const handleCardClick = (id) => {
      navigate(`/supplier/orders/${id}`)
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Navbar />
        {/* Hero unit */}
        <Typography variant="h2" align="center"> Student Dashboard </Typography>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
            <Container maxWidth >
                <Grid container spacing={5} >
                    <Grid
                        item
                        xs={20}
                        md={4}
                    >
                        <Card className={styles.fullHeightCard}>
                                <CardHeader
                                    title="Your Courses"

                                    titleTypographyProps={{ align: 'center' }}

                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mb: 5,
                                    }}
                                >
                                </Box>
                                <Table sx={{ minWidth: 10 }} aria-label="simple table">
                                    <TableHead style={{backgroundColor:'#77e090'}}>
                                        <TableRow variant="h1">
                                            <TableCell align='center'>Name</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell component="th" scope="row" align='center' style={{backgroundColor:'#ffffff'}}>
                                            {showdata.courses?.map((data) => (
                                                data?.name
                                            ))}
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            {/*<CardActions>*/}
                            {/*    <Button  fullWidth variant="outlined" onClick={routeChange} >*/}
                            {/*        Your Courses*/}
                            {/*    </Button>*/}

                            {/*</CardActions>*/}
                        </Card>
                    </Grid>
                    <Grid
                        item

                        xs={20}
                        md={4}
                    >
                        <Card className={styles.fullHeightCard}>
                            <CardHeader
                                title="Enrolments"

                                titleTypographyProps={{ align: 'center' }}

                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mb: 5,
                                    }}
                                >

                                </Box>

                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant="outlined">
                                    View Enrolments
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid
                        item

                        xs={20}
                        md={4}
                    >
                        <Card className={styles.fullHeightCard}>
                            <CardHeader
                                title="ADD Course"

                                titleTypographyProps={{ align: 'center' }}

                                subheaderTypographyProps={{
                                    align: 'center',
                                }}
                                sx={{
                                    backgroundColor: (theme) =>
                                        theme.palette.mode === 'light'
                                            ? theme.palette.grey[200]
                                            : theme.palette.grey[700],
                                }}
                            />
                            <CardContent>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        mb: 5,
                                    }}
                                >

                                </Box>
                                <Table sx={{ minWidth: 10 }} aria-label="simple table">
                                    <TableHead style={{backgroundColor:'#77e090'}}>
                                        <TableRow variant="h1">
                                            <TableCell align='center'>Name</TableCell>
                                            <TableCell align='center'>Videos</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableCell component="th" scope="row" align='center' style={{backgroundColor:'#ffffff'}}>
                                            {data.data?.map((data) => (
                                                data.name
                                            ))}
                                        </TableCell>
                                        <TableCell component="th" scope="row" align='center' style={{backgroundColor:'#ffffff'}}>
                                            {/*{data.data?.map((data) => (*/}
                                            {/*   data.videos*/}
                                            {/*))}*/}
                                            <iframe width="560" height="315" src="https://www.youtube.com/embed/D6Ac5JpCHmI" frameBorder="0" allowFullScreen/>
                                        </TableCell>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardActions>
                                <Button fullWidth variant="outlined">
                                    Add Course
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>


                </Grid>
            </Container>
      </Box>

      <FooterContainer />
    </ThemeProvider>


  )
}

export default UserHomepage
