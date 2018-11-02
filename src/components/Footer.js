import React from 'react';
import { Link } from 'react-router-dom';

import { colors, fonts } from '../theme';
import WebsiteLink from '../assets/images/harmoniedelft.png';

const MenuItem = ({ title, link }) => (
  <Link
    to={link || title.replace(/\s+/g, '-').toLowerCase()}
    style={styles.link}
  >
    {title}
  </Link>
);

const Footer = () => (
  <div style={styles.container}>
    <div style={styles.links}>
      <MenuItem title="Contact" />
      <MenuItem title="Nieuws" />
      <MenuItem title="KHD en de Gouden Eeuw" />
      <MenuItem title="Delftse Meesters 11 Mei" />
      <MenuItem title="Muziek Festival 25 Mei" />
      <a
        href="https://harmoniedelft.nl"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.link}
      >
        <img
          style={styles.websiteLinkImage}
          src={WebsiteLink}
          alt="https://harmoniedelft.nl"
        />
      </a>
    </div>
  </div>
);

const styles = {
  container: {
    height: 64,
    backgroundColor: colors.gold,
    display: 'flex',
    justifyContent: 'center',
  },
  websiteLinkImage: {
    maxWidth: 240,
    position: 'absolute',
    right: 0,
  },
  link: {
    textDecoration: 'none',
    marginLeft: 16,
    marginRight: 16,
    color: colors.dark,
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: fonts.title,
    whiteSpace: 'nowrap',
    fontSize: 12,
  },
  links: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default Footer;
