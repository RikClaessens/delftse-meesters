import React from 'react';
import Space from '../components/Space';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Anchor from '../components/Anchor';
import { colors } from '../theme';

const Page = ({ children, title, headerImage, anchorItems }) => (
  <div style={styles.container}>
    <Space height={50} backgroundColor={colors.gold} />
    <Logo />
    <Header title={title} image={headerImage} />
    {anchorItems && <Anchor items={anchorItems} />}
    <div style={styles.content}>{children}</div>
    <Space height={150} backgroundColor={colors.gold} />
  </div>
);

const styles = {
  container: { display: 'flex', flexDirection: 'column', flex: 1 },
  content: {
    paddingLeft: 32,
    paddingRight: 32,
    paddingTop: 12,
  },
};
export default Page;
