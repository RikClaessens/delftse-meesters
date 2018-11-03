import React from 'react';
import { Link } from 'react-router-dom';

import { colors, fonts } from '../theme';

const MenuItem = ({ setState, hover, id, action, title, link, style }) => {
  const onMouseEnter = setState
    ? () => setState({ hover: id || title })
    : () => {};
  const onMouseLeave = setState ? () => setState({ hover: null }) : () => {};
  const theStyle = {
    ...styles.link,
    ...((id || title) === hover ? styles.linkHover : {}),
    ...style,
  };

  return action ? (
    <span
      onClick={action}
      style={theStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title}
    </span>
  ) : (
    <Link
      to={link || title.replace(/\s+/g, '-').toLowerCase()}
      style={theStyle}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {title}
    </Link>
  );
};

const styles = {
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
    transition: 'color 0.25s ease-in-out',
  },
  linkHover: {
    color: colors.white,
  },
};
export default MenuItem;
