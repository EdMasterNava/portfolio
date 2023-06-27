import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectCalculatorHero() {
    return (
        <Box sx={{bgcolor: 'white', p: 10}}>
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                Calculator
                            </Typography>
                        </Grid>
                        <Grid item md={8}/>
                        <Grid item md={4}/>
                        <Grid item md={7} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Introducing my React Calculator App, a powerful and user-friendly application developed with React.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'This calculator provides a sleek interface, allowing users to perform various mathematical operations with ease.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Built with modular components and efficient logic, the app accurately handles calculations and displays results in real-time. It supports a wide range of functionalities, including addition, subtraction, multiplication, and division.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'With its responsive design and dynamic features, the React Calculator App is the perfect tool for anyone in need of quick and reliable calculations.'}
                            </Typography>
                            <Typography variant="h6" sx={{textAlign: 'left'}}> 
                                <a className="projectsLink" href="https://edmasternava.github.io/calculator/" target='_blank' rel="noreferrer"> 
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

export default ProjectCalculatorHero;