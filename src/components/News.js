import React from 'react';

import { NewsRow } from '../components';
import getNewsItems from '../Pages/News/data';

const getNewsRows = newsItems => {
  const newsRows = [[newsItems[0]]];
  let index = newsItems.length % 2 === 0 ? 0 : 1;
  for (let i = index; i < newsItems.length; i += 2) {
    newsRows[Math.ceil(i / 2)] = [newsItems[i], newsItems[i + 1]];
  }
  return newsRows;
};

const News = () => {
  const newsItems = getNewsItems();
  const newsRows = getNewsRows(newsItems);
  return newsRows.map(items => <NewsRow items={items} />);
};

export default News;
