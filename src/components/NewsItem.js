import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { colors, fonts } from '../theme';

class NewsItem extends Component {
  state = {
    hover: false,
  };
  render() {
    const { image, title, link } = this.props;
    const { hover } = this.state;
    const titleStyle = {
      ...styles.title,
      ...(hover
        ? { backgroundColor: colors.primary, color: colors.white }
        : {}),
    };

    const imageSrc = require(`../assets/images/${image}`);
    return link.startsWith('http') ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div style={styles.container}>
          <img style={styles.image} src={imageSrc} alt="logo" />
          <span style={titleStyle}>{title}</span>
        </div>
      </a>
    ) : (
      <Link
        to={`/nieuws/${link}`}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div style={styles.container}>
          <img style={styles.image} src={imageSrc} alt="logo" />
          <span style={titleStyle}>{title}</span>
        </div>
      </Link>
    );
  }
}

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
    maxWidth: '60%',
    textDecoration: 'none',
    color: colors.text,
    transition: 'color 0.25s ease-in-out, background-color 0.25s ease-in-out',
  },
};
export default NewsItem;
