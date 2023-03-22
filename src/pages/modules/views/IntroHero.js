import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function IntroHero(){
    return (
        <Box
            component="section"
            id="intro"
            sx={{ display: 'flex', overflow: 'hidden', bgcolor: '#fcda68', minHeight: '80vh'}}
        >
            <Container sx={{display: 'flex', 
                            flexDirection: 'column', 
                            textAlign: 'center',
                            justifyContent: 'center'}}>
                <Typography variant="h2">
                    Hi, I'm Eduardo
                </Typography>
                <Typography variant="h6" color="#8773f0" sx={{/*'-webkit-text-stroke': '.25px black'*/}}>
                    A Software Engineer
                </Typography>
            </Container>  
        </Box>
    )
}

export default IntroHero;