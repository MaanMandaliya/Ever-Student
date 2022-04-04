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

const theme = createTheme();
const styles = {
	fullHeightCard: {
		height: "100%",
	},
}


function UserHomepage() {

  let navigate = useNavigate();

const routeChange = () =>{ 
    let path = '/supplier/orders'; 
    navigate(path);
  }

  const [sortBy, setSortKey] = React.useState('');
  const [showdata, setShowData] = useState([]);
  const [Data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

    useEffect(() => {
      let config = {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        }
      }
      console.log(config.headers.authorization);
      const getCoursesURL = baseURL + 'courses/list';
      axios.get(getCoursesURL,config)
      .then((data) => {
        console.log(data);
        if (data.status) {
          setData(data.data)
          setShowData(data.data)
        }
        else {
          setIsError(true)
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
        <Typography variant="h2"> Courses </Typography>
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
                  title="Learn Python: The Complete Python Programming Course"
                  
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
                    <Avatar alt="Remy Sharp" src="" />         
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
                
                  <Button  fullWidth variant="outlined" onClick={routeChange} >  
                    Your Courses
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
