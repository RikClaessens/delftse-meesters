import React from 'react';

import { colors, fonts } from '../theme';

const onClick = item => {
  //   item.replace(/\s+/g, '-').toLowerCase()
};
const Anchor = ({ items }) => (
  <div style={styles.container}>
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
  item: {
    flex: 1,
    textAlign: 'center',
    textDecoration: 'none',
    color: colors.secondary,
  },
};
export default Anchor;
