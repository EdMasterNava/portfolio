import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';

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
                                {'Welcome to my landing page for Board Games, developed using CSS and HTML during my recent bootcamp.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'This landing page is designed to showcase a passion for board games and provide a visually appealing interface for visitors to explore a selection of games. The page features a clean and modern design, with a header section that includes a logo and a navigation menu for easy access to different sections of the site.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Below the header, visitors will find a hero section with a large background image and a call-to-action button inviting them to browse our game selection. As visitors scroll down the page, they will see several sections showcasing different categories of board games, each with its own image and brief description.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'I used CSS to create hover effects on the game images, which highlight the game.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'At the bottom of the page, I included a contact form for visitors to reach out with any questions or feedback. The footer section includes links to our social media pages, allowing visitors to follow us for updates and special promotions.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'Overall, our Board Games landing page is designed to be visually appealing and user-friendly, making it easy for visitors to find and explore our selection of board games. We hope that our love for board games shines through in every aspect of our landing page and that visitors enjoy their experience.'}
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