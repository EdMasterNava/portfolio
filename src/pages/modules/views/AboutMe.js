import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';

function AboutMe(){
    return(
        <Box sx={{bgcolor: 'white'}}>
            <Container component="section" id="about" sx={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', py: 5 }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Box sx={{minHeight: 375, minWidth: 425, position: {md: 'relative', xs: ''}}}>
                            <Box component="img" src={require('../img/portrait.jpg')} sx={{width: '100%', height: 'fit-content', objectFit: 'cover', position: {md: 'absolute', xs: ''}, top: {md: -38, xs: 0}, left: {md: 28, xs: 0}}}/>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{zIndex: 1}}>
                        <Box sx={{display: 'flex', bgcolor: '#8773f0', flexDirection: 'column', px: 10, pt: 5, minWidth: 425, height: 375, border: '2px solid black'}}>
                            <Typography variant="h2" color="#fcda68" gutterBottom>
                                About Me
                            </Typography>
                            <Typography variant="h5" color="white"sx={{mb: 4}}>
                                I'm a self taught Software Engineer from Los Angeles, CA. I use my drive and passion for learning to create digital experiences that help people.
                            </Typography>
                            <Link to="/projects/" className="projectsLink">
                                Check out my latest projects <LaunchIcon/>
                            </Link>
                        </Box>
                    </Grid>
                </Grid>    
            </Container>
        </Box>
        
    )
}

export default AboutMe;