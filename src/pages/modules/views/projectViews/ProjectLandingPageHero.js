import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import LaunchIcon from '@mui/icons-material/Launch';

function ProjectLandingPageHero() {
    return (
        <Box sx={{bgcolor: 'white', p: 10}}>
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={4}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                Landing Page
                            </Typography>
                        </Grid>
                        <Grid item md={8}/>
                        <Grid item md={4}/>
                        <Grid item md={7} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Introducing my Board Games landing page, a visually appealing interface developed during my recent bootcamp using CSS and HTML.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'This page showcases a passion for board games, featuring a clean design with a logo, navigation menu, and a hero section inviting visitors to explore our game selection.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'Each game category is accompanied by an image, with CSS hover effects highlighting the games. A contact form and social media links are provided for easy communication and updates.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'Our user-friendly landing page aims to deliver an enjoyable experience for visitors to discover and engage with our diverse board game collection.'}
                            </Typography>
                            <Typography variant="h6" sx={{textAlign: 'left'}}> 
                                <a className="projectsLink" href="https://edmasternava.github.io/board-games-LP/" target='_blank' rel="noreferrer"> 
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

export default ProjectLandingPageHero;