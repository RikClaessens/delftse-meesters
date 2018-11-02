import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

import { colors, fonts } from '../theme';
import Bars from '../assets/images/bars.png';

const Title = ({ title }) => (
  <ScrollableAnchor id={title.replace(/\s+/g, '-').toLowerCase()}>
    <div style={styles.container}>
      <img src={Bars} style={styles.bars} alt="" />
      <span style={styles.title}>{title}</span>
      <img src={Bars} style={styles.bars} alt="" />
    </div>
  </ScrollableAnchor>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  bars: {
    marginLeft: 16,
    marginRight: 16,
    height: 29,
  },
  title: {
    color: colors.secondary,
    textTransform: 'uppercase',
    fontFamily: fonts.title,
    lineHeight: '30px',
    fontSize: 18,
    whiteSpace: 'nowrap',
  },
};
export default Title;
