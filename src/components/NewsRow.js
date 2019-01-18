import React from 'react';
import Media from 'react-media';

import { NewsItem } from '../components';
import { mediaQueries } from '../theme';

const NewsRow = ({ items }) => (
  <Media query={mediaQueries.laptop}>
    {matches => (
      <div
        style={{
          display: 'flex',
          flex: 1,
          flexDirection: matches ? 'row' : 'column',
          marginBottom: 8,
        }}
      >
        {items
          .filter(i => i)
          .map(({ ...newsItemProps }) => (
            <div style={{ flex: 1, margin: 8 }}>
              <NewsItem {...newsItemProps} />
            </div>
          ))}
      </div>
    )}
  </Media>
);

export default NewsRow;
