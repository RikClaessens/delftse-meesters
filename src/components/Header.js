import React from 'react';

import { colors, fonts } from '../theme';

const Header = ({ image, title }) => (
  <div style={styles.container}>
    <img style={styles.image} src={image} alt="logo" />
    <span style={styles.title}>{title}</span>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlign: 'center',
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: 300,
    objectFit: 'cover',
    width: '100%',
  },
  title: {
    position: 'absolute',
    backgroundColor: colors.beige,
    bottom: 0,
    paddingLeft: 64,
    paddingRight: 64,
    paddingTop: 8,
    paddingBottom: 8,
    textTransform: 'uppercase',
    fontSize: 28,
    fontFamily: fonts.title,
    lineHeight: '28px',
    fontWeight: 500,
  },
};

export default Header;
