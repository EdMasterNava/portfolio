import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectHome from './pages/ProjectHome';
import ProjectLandingPage from './pages/ProjectLandingPage';
import ProjectClock from './pages/ProjectClock';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<ProjectHome />}></Route>
        <Route path="/projects/landing-page" element={<ProjectLandingPage />} />
        <Route path="/projects/25-5-clock" element={<ProjectClock />} />
      </Routes>
    </>
  );
}

export default App;
