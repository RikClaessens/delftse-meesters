import React from 'react';

import { fonts, colors } from '../theme';

const HighlightText = ({ text }) => (
  <div style={styles.container}>
    <span style={styles.text}>{text}</span>
  </div>
);

const styles = {
  container: {
    paddingTop: 24,
    marginLeft: 16,
    marginRight: 16,
  },
  text: {
    color: colors.gold,
    fontSize: 32,
    fontFamily: fonts.highLightText,
    fontWeight: 900,
  },
};

export default HighlightText;
