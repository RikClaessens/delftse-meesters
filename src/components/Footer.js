import React, { Component, Fragment } from 'react';
import Media from 'react-media';

import { colors, fonts, mediaQueries } from '../theme';
import WebsiteLink from '../assets/images/harmoniedelft.png';
import MenuItem from './MenuItem';

class Footer extends Component {
  state = { hover: null };

  render() {
    const { hover } = this.state;
    const hoverProps = {
      hover,
      setState: s => this.setState(s),
    };
    return (
      <div style={styles.container}>
        <div style={styles.links}>
          <MenuItem title="Contact" {...hoverProps} />
          <Media query={mediaQueries.tablet}>
            {matches =>
              matches && (
                <Fragment>
                  <MenuItem title="Nieuws" {...hoverProps} />
                  <MenuItem title="KHD en de Gouden Eeuw" {...hoverProps} />
                  <MenuItem title="Wereldpremière 11 Mei" {...hoverProps} />
                  <MenuItem title="Concertfestival 25 Mei" {...hoverProps} />
                  <MenuItem title="Maestro 25 Mei" {...hoverProps} />
                </Fragment>
              )
            }
          </Media>
          <a
            href="http://harmoniedelft.nl"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img
              style={styles.websiteLinkImage}
              src={WebsiteLink}
              alt="http://harmoniedelft.nl"
            />
          </a>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: 100,
    backgroundColor: colors.gold,
    display: 'flex',
    justifyContent: 'flex-start',
    marginTop: 64,
  },
  websiteLinkImage: {
    maxWidth: 240,
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
    position: 'absolute',
    right: 0,
    bottom: 8,
  },
  links: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: 16,
    position: 'relative',
  },
};
export default Footer;
