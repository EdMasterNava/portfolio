import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'

function ProjectTDShowcase() {
    return(
        <>
            <Box sx={{bgcolor: '#fcda68', py: 10}}>
                <Container>
                    <iframe height="750" width="100%" src="" title=""/>
                </Container>
            </Box>
            <Box component="section" sx={{bgcolor: 'white', p: 10}}>
                <Container>
                    <Box sx={{bgcolor: '#f8f4e6', borderRadius: 3, border: '2px solid black'}}>
                        <Grid container>
                            <Grid item md={4} sm={4} xs={12} sx={{bgcolor: 'rgb(0,0,0,0.8)', borderRadius: {sm: '10px 0 0 10px', xs: '10px'}}}>
                                <Link to="/projects/drum-machine" style={{textDecoration: 'none'}}>
                                    <Button sx={{   width: '100%', 
                                                    borderRadius: {sm: '10px 0 0 10px', xs: '10px 10px 0 0'}, 
                                                    backgroundImage: `url(${require('../../img/drumMachine.png')})`,
                                                    backgroundSize: '1000px',
                                                    backgroundPosition: '-280px -77px',
                                                    backgroundRepeat: 'no-repeat',
                                                    postion: 'relative',
                                                    '&:hover .backdrop': {background: 'rgba(0, 0, 0, 0.6)', filter: 'blur(5px)'},
                                                    '&:hover .textName': {color: 'black', background: 'rgba(255, 255, 255, 0.8)'}
                                                }}>
                                        <Box className="backdrop" sx={{position: 'absolute', width: '100%', height: '100%'}}/>
                                        <Box className="textName" sx={{ py: 1, 
                                                                        px: 2, 
                                                                        border: '2px solid transparent',
                                                                        background: 'transparent',
                                                                        color: 'transparent', 
                                                                        zIndex: 1
                                                                    }}>
                                            <Typography variant="h5">
                                                Previous
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item md={8} sm={8} xs={12}>
                                <Link to="/projects/calculator" style={{textDecoration: 'none'}}>
                                    <Button sx={{   width: '100%', 
                                                    borderRadius: {sm: '0 10px 10px 0', xs: '0 0 10px 10px'}, 
                                                    backgroundImage: `url(${require('../../img/calculator.png')})`,
                                                    backgroundSize: '600px',
                                                    backgroundPosition: '-100px -114px',
                                                    backgroundRepeat: 'no-repeat',
                                                    postion: 'relative',
                                                    '&:hover .backdrop': {background: 'rgba(0, 0, 0, 0.6)', filter: 'blur(5px)'},
                                                    '&:hover .textName': {color: 'black', background: 'rgba(255, 255, 255, 0.8)'}
                                                }}>
                                        <Box className="backdrop" sx={{position: 'absolute', width: '100%', height: '100%'}}/>
                                        <Box className="textName" sx={{ py: 1, 
                                                                        px: 2, 
                                                                        border: '2px solid transparent',
                                                                        background: 'transparent',
                                                                        color: 'transparent', 
                                                                        zIndex: 1
                                                                    }}>
                                            <Typography variant="h5">
                                                Next
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

export default ProjectTDShowcase;