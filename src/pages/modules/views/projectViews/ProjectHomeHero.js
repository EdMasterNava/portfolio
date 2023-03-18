import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '../../components/Typography';

function ProjectHomeHero(){
    return (
        <Box component="section" sx={{bgcolor: 'white', p: 5}}> 
            <Container sx={{textAlign: 'center'}}>
                <Typography variant="h2">
                    Projects
                </Typography>
            </Container>
        </Box>
    )
}

export default ProjectHomeHero;