import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function FooterWhite() {
    return (
        <Typography component="footer" sx={{display: 'flex', bgcolor: 'white'}}>
            <Container sx={{py: 5, display: 'flex', flexDirection: 'row', gap: 5}}>
                <a  href='https://www.linkedin.com/in/eduardo-nava-codes/' 
                    target='_blank' 
                    rel="noreferrer" 
                    style={{textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'row'}}>
                    <LinkedInIcon />
                    <div style={{alignSelf: 'center', fontWeight: 'bold', fontSize: '1.2rem'}}>
                        LinkedIn
                    </div>
                </a>
                <a  href='https://github.com/EdMasterNava' 
                    target='_blank' 
                    rel="noreferrer" 
                    style={{textDecoration: 'none', color: 'black', display: 'flex', flexDirection: 'row'}}>
                    <GitHubIcon />
                    <div style={{alignSelf: 'center', fontWeight: 'bold', fontSize: '1.2rem', marginLeft: '1px'}}>
                        GitHub
                    </div>
                </a>
            </Container>
        </Typography>
    )
}

export default FooterWhite;