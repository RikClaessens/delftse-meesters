import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { fonts, colors } from '../theme';

class CustomLink extends Component {
  state = { hover: false };

  render() {
    const {
      to = '/',
      children,
      linkStyle = { ...styles.link, ...this.props.style },
      linkHoverStyle = styles.linkHover,
    } = this.props;
    const { hover } = this.state;
    const targetProp = to.startsWith('http') ? { target: '_blank' } : null;
    return to.startsWith('http') || to.startsWith('mailto') ? (
      <a
        href={to}
        {...targetProp}
        rel="noopener noreferrer"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
        style={{ ...linkStyle, ...(hover ? linkHoverStyle : {}) }}
      >
        {children}
      </a>
    ) : (
      <Link
        to={to}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
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
    transition: 'color 0.1s ease-in-out',
  },
  linkHover: {
    color: colors.secondary,
    textDecoration: 'underline',
  },
};

export default CustomLink;
