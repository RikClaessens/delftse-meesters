import React from 'react';

import { NewsItem } from '../components';

const NewsRow = ({ items }) => (
  <div style={{ display: 'flex', flex: 1 }}>
    {items.map(({ ...newsItemProps }) => (
      <div style={{ margin: 8 }}>
        <NewsItem {...newsItemProps} />
      </div>
    ))}
  </div>
);

export default NewsRow;
