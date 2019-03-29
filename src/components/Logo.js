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
    marginLeft: 100,
    marginTop: 6,
    marginRight: 100,
    marginBottom: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    maxWidth: '50%',
    objectFit: 'contain',
    minWidth: 280,
  },
};

export default Component;
