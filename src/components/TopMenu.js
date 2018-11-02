import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import { FaHome } from 'react-icons/fa';

import { colors, fonts } from '../theme';

const MenuItem = ({ title, link }) => (
  <Link
    to={link || title.replace(/\s+/g, '-').toLowerCase()}
    style={styles.link}
  >
    {title}
  </Link>
);

const KHDSocialIcon = ({ url }) => (
  <SocialIcon color={colors.dark} style={styles.socialIcon} url={url} />
);

const TopMenu = () => (
  <div style={styles.container}>
    <div style={styles.social}>
      <KHDSocialIcon url="https://www.facebook.com/harmoniedelft" />
      <KHDSocialIcon url="https://twitter.com/harmoniedelft" />
      <KHDSocialIcon url="https://www.instagram.com/harmoniedelft/" />
    </div>
    <div style={styles.links}>
      <MenuItem title={<FaHome />} link="/" />
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
    justifyContent: 'center',
  },
  social: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 8,
  },
  socialIcon: {
    width: 32,
    height: 32,
    margin: 2,
  },
  link: {
    textDecoration: 'none',
    marginLeft: 8,
    marginRight: 8,
    color: colors.dark,
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontFamily: fonts.title,
    whiteSpace: 'nowrap',
    fontSize: 14,
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
