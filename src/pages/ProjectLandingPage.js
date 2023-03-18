import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectLandingPage() {
    return (
      <React.Fragment>
        <AppAppBar />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectLandingPage);