import React from 'react';
import Media from 'react-media';

import { colors, fonts, mediaQueries } from '../theme';

const Anchor = ({ items }) =>
  items && (
    <Media query={mediaQueries.tablet}>
      {matches =>
        matches && (
          <div style={styles.container}>
            <div style={styles.anchorItems}>
              {items.map(item => (
                <a
                  href={`#${item.replace(/\s+/g, '-').toLowerCase()}`}
                  key={item}
                  style={styles.item}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )
      }
    </Media>
  );

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 32,
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
};
export default Anchor;
