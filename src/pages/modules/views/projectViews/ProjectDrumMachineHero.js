import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectDrumMachineHero() {
    return (
        <Box sx={{bgcolor: 'white', p: 10}}>
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                Drum Machine
                            </Typography>
                        </Grid>
                        <Grid item md={8}/>
                        <Grid item md={4}/>
                        <Grid item md={7} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Introducing my React-powered Drum Machine project, an interactive and engaging application that allows users to create rhythm and music.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'Built with CSS, HTML, and JavaScript, this drum machine offers a dynamic interface where users can trigger sound samples by either clicking on the drum pads or using corresponding keyboard keys.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'The project includes an array of drum sounds, enabling users to create unique beats and explore their musical creativity. Start jamming with this intuitive Drum Machine and unleash your inner musician with just a click or a key press.'}
                            </Typography>
                            <Typography variant="h6" sx={{textAlign: 'left'}}> 
                                <a className="projectsLink" href="https://edmasternava.github.io/tomato-clock/" target='_blank' rel="noreferrer"> 
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

export default ProjectDrumMachineHero;