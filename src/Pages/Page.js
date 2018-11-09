import React from 'react';
import Media from 'react-media';

import { mediaQueries } from '../theme';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Anchor from '../components/Anchor';
import TopMenu from '../components/TopMenu';

const Page = ({ children, title, headerImage, anchorItems }) => (
  <div style={styles.container}>
    <TopMenu />
    <div id="page-wrap">
      <Logo />
      <Header title={title} image={headerImage} />
      <Anchor items={anchorItems} />
      <Media query={mediaQueries.tablet}>
        {matches => (
          <div style={!matches ? styles.contentMobile : styles.content}>
            {children}
          </div>
        )}
      </Media>
      <Footer />
    </div>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  content: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 32,
    maxWidth: '60%',
    minWidth: 400,
    textAlign: 'center',
    margin: '0 auto',
  },
  contentMobile: {
    width: '90%',
    margin: '0 auto',
    paddingTop: 32,
  },
};
export default Page;
