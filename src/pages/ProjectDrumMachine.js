import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectDrumMachineHero from './modules/views/projectViews/ProjectDrumMachineHero';
import ProjectDrumMachineShowcase from './modules/views/projectViews/ProjectDrumMachineShowcase';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectMachine() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectDrumMachineHero />
        <ProjectDrumMachineShowcase />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectMachine);