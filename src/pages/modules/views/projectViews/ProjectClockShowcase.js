import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';
import Button from '../../components/Button';
import { Link } from 'react-router-dom'

function ProjectClockShowcase() {
    return(
        <>
            <Box sx={{bgcolor: '#fcda68', py: 10}}>
                <Container>
                    <iframe height="750" width="100%" src="" title=""/>
                </Container>
            </Box>
            <Box component="section" sx={{bgcolor: 'white', p: 10}}>
                <Container>
                    <Box sx={{bgcolor: '#8773f0', borderRadius: 3, border: '2px solid black'}}>
                        <Grid container>
                            <Grid item md={4} sm={4} xs={12} sx={{bgcolor: 'rgb(0,0,0,0.8)', borderRadius: {sm: '10px 0 0 10px', xs: '10px'}}}>
                                <Link to="/projects/" style={{textDecoration: 'none'}}>
                                    <Button sx={{width: '100%', borderRadius: {sm: '10px 0 0 10px', xs: '10px'}}}>
                                        <Box sx={{py: 5}}>
                                            <Typography variant="h4">
                                                Previous
                                            </Typography>
                                        </Box>
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item md={8} sm={8} xs={12}>
                                <Link to="/projects/drum-machine" style={{textDecoration: 'none'}}>
                                    <Button sx={{width: '100%', borderRadius: {sm: '0 10px 10px 0', xs: '10px'}, backgroundImage: `url(${require('../../img/tomatoClock.png')})`}}>
                                        <Box sx={{py: 5}}>
                                            <Typography variant="h4">
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

export default ProjectClockShowcase;