import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../assets/images/logo-header.png';

const Component = () => (
  <Link to="/" style={styles.container}>
    <img style={styles.logo} src={Logo} alt="logo" />
  </Link>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    paddingLeft: 100,
    paddingTop: 6,
    paddingRight: 100,
    paddingBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: '50%',
    objectFit: 'contain',
    minWidth: 400,
  },
};

export default Component;
