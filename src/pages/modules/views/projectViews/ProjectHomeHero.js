import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'

function ProjectHomeHero(){
    return (
        <Box component="section" sx={{bgcolor: 'white', p: 10}}> 
            <Container sx={{textAlign: 'center'}}>
                <Box sx={{bgcolor: '#8773f0', border: '2px solid black', mb: 5, borderRadius: 3, p: 5}}>
                    <Grid container>
                        <Grid item md={3}>
                            <Typography variant="h2" sx={{color: '#fcda68', textAlign: 'right'}}>
                                Projects
                            </Typography>
                        </Grid>
                        <Grid item md={9}/>
                        <Grid item md={3}/>
                        <Grid item md={8} sx={{py: 3}}>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'As a recent graduate of a coding bootcamp, I am excited to share some of the projects I have worked on during my training. Over the course of the program, I gained valuable skills in web development, including HTML, CSS, JavaScript, and several popular frameworks and libraries. With the guidance of experienced instructors and the support of a collaborative community, I was able to take on challenging projects and learn how to create responsive and dynamic web applications.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {'Throughout the bootcamp, I worked on several projects that demonstrate my proficiency in various aspects of web development. From creating simple landing pages to building full-stack applications with React and MongoDB, each project challenged me to think creatively and develop solutions to real-world problems. I also had the opportunity to work with other developers, practice agile development methodologies, and learn about industry best practices.'}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {'I am proud of the work I have done and I am excited to share my projects with others. I believe that my experience in the bootcamp has prepared me well for a career in web development and I look forward to continuing to grow and develop my skills.'}
                            </Typography>
                        </Grid>
                        <Grid item md={1}/>
                    </Grid>
                </Box>
                
                <Box sx={{bgcolor: '#8773f0', borderRadius: 3, border: '2px solid black'}}>
                    <Grid container>
                        <Grid item md={4} sm={4} xs={12} sx={{bgcolor: 'rgb(0,0,0,0.8)', borderRadius: {sm: '10px 0 0 10px', xs: '10px'}}}>
                        </Grid>
                        <Grid item md={8} sm={8} xs={12} sx={{position: 'relative'}}>
                            <Link to="/projects/landing-page" style={{textDecoration: 'none'}}>
                                <Button sx={{   width: '100%', 
                                                borderRadius: {sm: '0 10px 10px 0', xs: '10px'}, 
                                                backgroundImage: `url(${require('../../img/boardGamesLandingPage.png')})`,
                                                backgroundSize: '1700px', 
                                                postion: 'relative',
                                                '&:hover .backdrop': {background: 'rgba(0, 0, 0, 0.4)', filter: 'blur(5px)'},
                                                '&:hover .textName': {color: 'black', background: 'rgba(255, 255, 255, 0.8)', borderRadius: 2}
                                            }}>
                                    <Box className="backdrop" sx={{position: 'absolute', width: '100%', height: '100%'}}/>
                                    <Box className="textName" sx={{py: 1, px: 2, border: '2px solid transparent', color: 'black', zIndex: 1}}>
                                        <Typography variant="h5" >
                                            Next Project
                                        </Typography>
                                    </Box>
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default ProjectHomeHero;