import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectHomeHero from './modules/views/projectViews/ProjectHomeHero';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectHome() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectHomeHero />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectHome);