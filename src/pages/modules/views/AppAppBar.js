import * as React from 'react';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import './css/AppAppBar.css';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed" sx={{backgroundColor: '#fcda68', p: 1}}>
        <Container sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Link to="/" className="navName">
            Eduardo Nava
          </Link>
          <Link to="/projects/" className="navTabs">
            Projects
          </Link>
        </Container>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;