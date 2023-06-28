import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectClockHero() {
    return (
        <Box sx={{bgcolor: 'white', p: 10}}>
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                25-5 Clock
                            </Typography>
                        </Grid>
                        <Grid item md={8}/>
                        <Grid item md={4}/>
                        <Grid item md={7} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'My React-based Pomodoro Timer project, designed to enhance productivity through focused work and regular breaks.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'This dynamic clock application allows users to set 25-minute work sessions followed by 5-minute breaks, creating a structured and efficient workflow.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'With a user-friendly interface built using React, the timer provides visual cues and notifications to indicate session progress and transitions.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Start optimizing your work routine with this intuitive Pomodoro Timer and unlock enhanced productivity and work-life balance.'}
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

export default ProjectClockHero;