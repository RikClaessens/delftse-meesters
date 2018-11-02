import React from 'react';
import { colors } from '../theme';

const Component = ({ height = 100, backgroundColor = colors.primary }) => (
  <div style={{ height, backgroundColor }} />
);

export default Component;
