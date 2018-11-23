import React from 'react';

import { fonts, colors } from '../theme';

const HighlightText = ({ text }) => (
  <div style={styles.container}>
    <span style={styles.text}>{text}</span>
  </div>
);

const styles = {
  container: {
    marginLeft: 16,
    marginRight: 16,
    textAlign: 'center',
  },
  text: {
    color: colors.gold,
    fontSize: 24,
    fontFamily: fonts.highLightText,
    fontWeight: 900,
  },
};

export default HighlightText;
