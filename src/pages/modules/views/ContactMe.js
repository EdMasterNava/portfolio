import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';
import ContactForm from '../components/ContactMeForm';

function ContactMe() {
    return (
        <Typography component="footer" sx={{display: 'flex', bgcolor: 'white', pt: 15, pb: {xs: 10, md: 25}}} id="reach">
            <Container sx={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                <ContactForm />
            </Container>
        </Typography>
    )
}

export default ContactMe;