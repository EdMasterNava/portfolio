import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function ProjectLandingPageShowcase() {
    return(
        <Box sx={{bgcolor: '#fcda68', py: 10}}>
            <Container>
                {/* <iframe height="750"  
                        width="100%" 
                        scrolling="yes" 
                        title="FCC Landing Page 'Board Games'" 
                        src="https://cdpn.io/eddiebuckets/fullembedgrid/ExooJvo?animations=run&type=embed" 
                        frameborder="0" 
                        loading="lazy" 
                        allowtransparency="true" 
                        allowfullscreen="true" 
                        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
                        data-src="https://cdpn.io/eddiebuckets/fullembedgrid/ExooJvo?animations=run&type=embed">
                </iframe> */}
                <iframe height="750" width="100%" src="https://edmasternava.github.io/bjj-reg/" title="FCC Landing Page 'Board Games'"/>
            </Container>
        </Box>
    )
}

export default ProjectLandingPageShowcase;