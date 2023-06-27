import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectClockHero from './modules/views/projectViews/ProjectClockHero';
import ProjectClockShowcase from './modules/views/projectViews/ProjectClockShowcase';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectClock() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectClockHero />
        <ProjectClockShowcase />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectClock);