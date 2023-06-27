import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectTDHero from './modules/views/projectViews/ProjectTDHero';
import ProjectTDShowcase from './modules/views/projectViews/ProjectTDShowcase';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectClock() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectTDHero />
        <ProjectTDShowcase />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectClock);