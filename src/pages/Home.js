import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import IntroHero from './modules/views/IntroHero';
import AboutMe from './modules/views/AboutMe';
import Projects from './modules/views/Projects';
import ContactMe from './modules/views/ContactMe';
import Footer from './modules/views/Footer';
import withRoot from './modules/withRoot';

function Index() {
  return (
    <React.Fragment>
      <AppAppBar />
      <IntroHero />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);