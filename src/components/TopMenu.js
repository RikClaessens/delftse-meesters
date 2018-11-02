import React from 'react';
import { Link } from 'react-router-dom';

import { colors, fonts } from '../theme';

const MenuItem = ({ title, link }) => (
  <Link
    to={link || title.replace(/\s+/g, '-').toLowerCase()}
    style={styles.link}
  >
    {title}
  </Link>
);

const TopMenu = () => (
  <div style={styles.container}>
    <div style={{ flex: 1 }}> facebook- twitter-instagram</div>
    <div style={styles.links}>
      <MenuItem title="Nieuws" />
      <MenuItem title="KHD en de Gouden Eeuw" />
      <MenuItem title="Delftse Meesters 11 Mei" />
      <MenuItem title="Muziek Festival 25 Mei" />
    </div>
  </div>
);

const styles = {
  container: {
    height: 64,
    backgroundColor: colors.gold,
    display: 'flex',
  },
  social: {},
  link: {
    textDecoration: 'none',
    marginLeft: 16,
    marginRight: 16,
    color: colors.dark,
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: fonts.title,
  },
  links: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 32,
  },
};
export default TopMenu;
