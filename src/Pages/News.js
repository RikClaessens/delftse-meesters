import React from 'react';

import Page from './Page';
import { News } from '../components';
import HeaderImage from '../assets/images/kapel-westcord-1.jpg';

const NewsPage = () => {
  return (
    <Page title="Nieuws" headerImage={HeaderImage}>
      <News />
    </Page>
  );
};

export default NewsPage;
