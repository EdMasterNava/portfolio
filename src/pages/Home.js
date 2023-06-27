import * as React from 'react';
import AppAppBar from './modules/views/AppAppBar';
import IntroHero from './modules/views/IntroHero';
import AboutMe from './modules/views/AboutMe';
import Projects from './modules/views/Projects';
// import ContactMe from './modules/views/ContactMe';
import FooterWhite from './modules/views/FooterWhite';
import withRoot from './modules/withRoot';

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <IntroHero />
      <AboutMe />
      <Projects />
      {/* <ContactMe /> */}
      <FooterWhite />
    </React.Fragment>
  );
}

export default withRoot(Home);