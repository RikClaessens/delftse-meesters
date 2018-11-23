import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fonts, colors } from '../theme';

class CustomLink extends Component {
  state = { hover: false };

  render() {
    const {
      to = '/',
      children,
      linkStyle = styles.link,
      linkHoverStyle = styles.linkHover,
    } = this.props;
    const { hover } = this.state;
    return (
      <Link
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        to={to}
        style={{ ...linkStyle, ...(hover ? linkHoverStyle : {}) }}
      >
        {children}
      </Link>
    );
  }
}

const styles = {
  link: {
    fontFamily: fonts.link,
    textDecoration: 'none',
    color: colors.gold,
  },
  linkHover: {
    color: colors.secondary,
    textDecoration: 'underline',
  },
};

export default CustomLink;
