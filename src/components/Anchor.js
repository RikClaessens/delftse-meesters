import React, { Component } from 'react';
import Media from 'react-media';

import { colors, fonts, mediaQueries } from '../theme';

class Anchor extends Component {
  state = { hover: null };
  render() {
    const { items } = this.props;
    const { hover } = this.state;

    return items ? (
      <Media query={mediaQueries.tablet}>
        {matches =>
          matches && (
            <div style={styles.container}>
              <div style={styles.anchorItems}>
                {items.map(item => (
                  <a
                    href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                    key={item}
                    style={{
                      ...styles.item,
                      ...(hover === item ? styles.itemHover : {}),
                    }}
                    onMouseEnter={() => this.setState({ hover: item })}
                    onMouseLeave={() => this.setState({ hover: null })}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )
        }
      </Media>
    ) : null;
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontFamily: fonts.title,
    lineHeight: '32px',
  },
  anchorItems: {
    maxWidth: '60%',
    display: 'flex',
    flex: 1,
  },
  item: {
    flex: 1,
    textAlign: 'center',
    textDecoration: 'none',
    color: colors.secondary,
  },
  itemHover: {
    textDecoration: 'underline',
    color: colors.gold,
  },
};
export default Anchor;
