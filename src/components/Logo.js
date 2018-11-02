import React from 'react';

import Logo from '../assets/images/logo-long.png';

const Component = () => (
  <div style={styles.container}>
    <img style={styles.logo} src={Logo} alt="logo" />
  </div>
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
    maxWidth: '40%',
    objectFit: 'contain',
    minWidth: 400,
  },
};

export default Component;
