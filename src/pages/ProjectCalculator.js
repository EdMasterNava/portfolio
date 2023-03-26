import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import ProjectCalculatorHero from './modules/views/projectViews/ProjectCalculatorHero';
import ProjectCalculatorShowcase from './modules/views/projectViews/ProjectCalculatorShowcase';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function ProjectCalculator() {
    return (
      <React.Fragment>
        <AppAppBar />
        <ProjectCalculatorHero />
        <ProjectCalculatorShowcase />
        <Footer />
      </React.Fragment>
    );
  }
  
  export default withRoot(ProjectCalculator);