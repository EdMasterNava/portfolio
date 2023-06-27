import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'

function ProjectDrumMachineShowcase() {
    return(
        <>
            <Box sx={{bgcolor: '#fcda68', py: 10}}>
                <Container>
                    <iframe height="750" width="100%" src="https://edmasternava.github.io/drum-machine/" title="Drum Machine"/>
                </Container>
            </Box>
            <Box component="section" sx={{bgcolor: 'white', p: 10}}>
                <Container>
                    <Box sx={{bgcolor: '#8773f0', borderRadius: 3, border: '2px solid black'}}>
                        <Grid container>
                            <Grid item md={4} sm={4} xs={12} sx={{bgcolor: 'rgb(0,0,0,0.8)', borderRadius: {sm: '10px 0 0 10px', xs: '10px'}}}>
                                <Link to="/projects/25-5-clock" style={{textDecoration: 'none'}}>
                                    <Button sx={{   width: '100%', 
                                                    borderRadius: {sm: '10px 0 0 10px', xs: '10px 10px 0 0'}, 
                                                    backgroundImage: `url(${require('../../img/tomatoClock.png')})`,
                                                    backgroundSize: '800px',
                                                    backgroundPosition: '-280px -225px',
                                                    backgroundRepeat: 'no-repeat',
                                                    postion: 'relative',
                                                    '&:hover .backdrop': {background: 'rgba(0, 0, 0, 0.4)', filter: 'blur(5px)'},
                                                    '&:hover .textName': {color: 'black', background: 'rgba(255, 255, 255, 0.8)', borderRadius: 2}
                                                }}>
                                        <Box className="backdrop" sx={{position: 'absolute', width: '100%', height: '100%'}}/>
                                        <Box className="textName" sx={{ py: 1, 
                                                                        px: 2, 
                                                                        border: '2px solid transparent',
                                                                        background: 'rgba(255, 255, 255, 0.8)',
                                                                        color: 'black', 
                                                                        zIndex: 1,
                                                                        borderRadius: 2
                                                                    }}>
                                            <Typography variant="h5">
                                                Back
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item md={8} sm={8} xs={12}>
                                <Link to="/projects/technical-doc" style={{textDecoration: 'none'}}>
                                    <Button sx={{   width: '100%', 
                                                    borderRadius: {sm: '0 10px 10px 0', xs: '0 0 10px 10px'}, 
                                                    backgroundImage: `url(${require('../../img/therollroster.png')})`,
                                                    backgroundSize: '800px',
                                                    backgroundPosition: '0px 0px',
                                                    backgroundRepeat: 'no-repeat',
                                                    '&:hover .backdrop': {background: 'rgba(0, 0, 0, 0.4)', filter: 'blur(5px)'},
                                                    '&:hover .textName': {color: 'black', background: 'rgba(255, 255, 255, 0.8)', borderRadius: 2}
                                                }}>
                                            <Box className="backdrop" sx={{position: 'absolute', width: '100%', height: '100%'}}/>
                                            <Box className="textName" sx={{ py: 1, 
                                                                            px: 2, 
                                                                            border: '2px solid transparent',
                                                                            background: 'rgba(255, 255, 255, 0.8)',
                                                                            color: 'black', 
                                                                            zIndex: 1,
                                                                            borderRadius: 2
                                                                        }}>
                                            <Typography variant="h5">
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
        </>
    )
}

export default ProjectDrumMachineShowcase;