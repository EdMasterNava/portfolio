import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';
import Grid from '@mui/material/Grid';

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
                                {''}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>                                
                                {''}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {''}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {''}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {''}
                            </Typography>
                            <Typography variant="h6" sx={{color: 'white', textAlign: 'left', pb: 2}}>
                                {''}
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