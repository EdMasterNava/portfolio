import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <Typography component="footer" sx={{display: 'flex', bgcolor: '#fcda68'}}>
            <Container sx={{py: 5, display: 'flex'}}>
                <LinkedInIcon />
                <GitHubIcon />
            </Container>
        </Typography>
    )
}

export default Footer;