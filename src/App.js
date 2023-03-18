import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectLandingPage from './pages/ProjectLandingPage';
import ProjectHome from './pages/ProjectHome';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<ProjectHome />}></Route>
        <Route path="/projects/landing-page" element={<ProjectLandingPage />} />
      </Routes>
    </>
  );
}

export default App;
