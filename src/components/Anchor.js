import React from 'react';

import { colors, fonts } from '../theme';

const onClick = item => {
  //   item.replace(/\s+/g, '-').toLowerCase()
};
const Anchor = ({ items }) => (
  <div style={styles.container}>
    {items.map(item => (
      <span key={item} onClick={() => onClick(item)} style={styles.item}>
        {item}
      </span>
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 32,
    color: colors.secondary,
    textTransform: 'uppercase',
    fontFamily: 'Din-Condensed-Bold',
    lineHeight: '32px',
  },
  item: {
    flex: 1,
    textAlign: 'center',
  },
};
export default Anchor;
