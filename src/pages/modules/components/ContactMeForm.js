import React, { useState } from 'react';
import Typography from '../components/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from './TextField';
import Button from './Button';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name: ', name);
    console.log('Email: ', email);
    console.log('Message: ', message);
    // You can add code here to send the form data to your server
  };

  return (
    <Container sx={{backgroundColor: '#8773f0', width: {xs: 375, md: 750}, height: 'fit-content', py: 5, border: '2px solid black', mt: 5, borderRadius: 3}}>
        <form onSubmit={handleSubmit}>
          <Container>
            <Typography variant="h2" sx={{pb: 5, color: '#fcda68', textAlign: 'left'}}>
              Reach Me
            </Typography>
          </Container>
          
          <Container sx={{display: 'flex', flexDirection: {md: 'row', xs: 'column'}}}>
              <Box sx={{display: 'flex', flexDirection: 'column', pr: {md: 5, xs: 0}, width: {md: '40%', xs: '100%'}}}>
                  <TextField
                      label="Name"
                      variant="outlined"
                      value={name}
                      onChange={handleNameChange}
                      color='secondary'
                      focused
                      required
                      sx={{py: 2.1, width: '100%'}}
                  />
                  <TextField
                      label="Email"
                      variant="outlined"
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      color='secondary'
                      focused
                      required
                      sx={{py: 2.1, width: '100%'}}
                  />
              </Box>
              <Box sx={{display: 'flex', width: {md: '60%', xs: '100%'}}}>
                  <TextField
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={5}
                      value={message}
                      onChange={handleMessageChange}
                      color='secondary'
                      focused
                      required
                      sx={{pt: 2, width: '100%'}}
                  /> 
              </Box>  
          </Container>
          <Container>
              <Box>
                  <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      sx={{py: 2, mt: 2, width: '100%'}}
                  >
                      Submit
                  </Button>  
              </Box>
          </Container> 
        </form>
    </Container>
    
  );
};

export default ContactForm;
