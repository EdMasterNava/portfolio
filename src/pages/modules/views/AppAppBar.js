import * as React from 'react';
import Box from '@mui/material/Box';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Container from '@mui/material/Container';
import './css/AppAppBar.css';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor: '#fcda68'}}>
        <Container >
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between'}}>
            <a href="#intro" className="navName">
              Eduardo Nava
            </a>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <a href="#about" className="navTabs">
                About Me
              </a>
              <a href="#projects" className="navTabs">
                Projects
              </a>
              <a href="#reach" className="navTabs">
                Reach Me
              </a>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;