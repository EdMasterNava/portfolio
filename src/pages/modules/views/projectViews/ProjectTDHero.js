import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectTDHero() {
    return (
        <Box sx={{bgcolor: 'white', p: 10}}>
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                The Roll Roster
                            </Typography>
                        </Grid>
                        <Grid item md={8}/>
                        <Grid item md={4}/>
                        <Grid item md={7} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Introducing my Jiu Jitsu Tournament Tracker, a responsive and feature-rich webpage developed using React and Material-UI.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'This application provides a comprehensive platform to track Jiu Jitsu tournaments, presenting the data in an organized table format.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'With seamless integration of Material-UI components, the webpage offers a visually appealing and intuitive user interface. Users can easily view tournament details, including date, location, and efficiently navigate through the table with searching and filtering options.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'The Jiu Jitsu Tournament Tracker ensures a streamlined experience for organizers and participants alike, making it an essential tool for the Jiu Jitsu community.'}
                            </Typography>
                            <Typography variant="h6" sx={{textAlign: 'left'}}> 
                                <a className="projectsLink" href="https://therollroster.com/" target='_blank' rel="noreferrer"> 
                                    See it in action <LaunchIcon sx={{fontSize: 20}}/>
                                </a>
                            </Typography>
                        </Grid>
                        <Grid item md={1}/>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ProjectTDHero;