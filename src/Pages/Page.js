import React from 'react';
import Footer from '../components/Footer';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Anchor from '../components/Anchor';
import TopMenu from '../components/TopMenu';

const Page = ({ children, title, headerImage, anchorItems }) => (
  <div style={styles.container}>
    <TopMenu />
    <Logo />
    <Header title={title} image={headerImage} />
    {anchorItems && <Anchor items={anchorItems} />}
    <div style={styles.content}>{children}</div>
    <Footer />
  </div>
);

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1 },
  content: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
    maxWidth: '60%',
    minWidth: 400,
    textAlign: 'center',
    margin: '0 auto',
  },
};
export default Page;
