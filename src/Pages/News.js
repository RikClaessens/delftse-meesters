import React from 'react';

import Page from './Page';
import { NewsRow } from '../components';
import HeaderImage from '../assets/images/kapel-westcord-1.jpg';
import KevinAndThijs from '../assets/images/kevin-houben-en-voorzitter-thijs.jpg';
import OctopusGoudenEeuw from '../assets/images/octopus-gouden-eeuw.jpg';

const News = () => (
  <Page title="Nieuws" headerImage={HeaderImage}>
    <NewsRow
      items={[
        {
          title: 'Aftrap Delft en de Gouden Eeuw',
          link: 'aftrap-delft-en-de-gouden-eeuw',
          image: OctopusGoudenEeuw,
        },
        {
          title: 'Ideeën muziekstuk voor Delft',
          link: 'ideeen-muziekstuk-voor-delft',
          image: KevinAndThijs,
        },
      ]}
    />
  </Page>
);

export default News;
