import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProjectHome from './pages/ProjectHome';
import ProjectLandingPage from './pages/ProjectLandingPage';
import ProjectClock from './pages/ProjectClock';
import ProjectDrumMachine from './pages/ProjectDrumMachine';
import ProjectTD from './pages/ProjectTD';
import ProjectCalculator from './pages/ProjectCalculator';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/" element={<ProjectHome />}></Route>
        <Route path="/projects/landing-page" element={<ProjectLandingPage />} />
        <Route path="/projects/25-5-clock" element={<ProjectClock />} />
        <Route path="/projects/drum-machine" element={<ProjectDrumMachine />} />
        <Route path="/projects/technical-doc" element={<ProjectTD />} />
        <Route path="/projects/calculator" element={<ProjectCalculator />} />
      </Routes>
    </>
  );
}

export default App;
