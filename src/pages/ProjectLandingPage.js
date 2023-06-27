import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectLandingPageHero from './modules/views/projectViews/ProjectLandingPageHero';
import ProjectLandingPageShowcase from './modules/views/projectViews/ProjectLandingPageShowcase';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectLandingPage() {
  React.useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectLandingPageHero />
        <ProjectLandingPageShowcase />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectLandingPage);