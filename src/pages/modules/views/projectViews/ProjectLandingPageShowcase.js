import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ProjectLandingPageShowcase() {
    return(
        <Box sx={{bgcolor: '#fcda68', py: 10}}>
            <Container>
                <iframe height="750" width="100%" src="https://edmasternava.github.io/board-games-LP/" title="FCC Landing Page 'Board Games'"/>
            </Container>
        </Box>
    )
}

export default ProjectLandingPageShowcase;