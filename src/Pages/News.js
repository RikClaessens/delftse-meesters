import React from 'react';

import Page from './Page';
import { NewsRow } from '../components';
import HeaderImage from '../assets/images/OnbegrensdGenieten2018-4.jpg';
import KevinAndThijs from '../assets/images/kevin-houben-en-voorzitter-thijs.jpg';
import WereldBand from '../assets/images/wereldband.jpg';

const News = () => (
  <Page title="Nieuws" headerImage={HeaderImage}>
    <NewsRow
      items={[
        {
          title: 'Ideeën muziekstuk voor Delft',
          link: 'ideeen-muziekstuk-voor-delft',
          image: KevinAndThijs,
        },
        {
          title: 'De Wërëldband zorgt voor vuurwerk bij jubileum KHD',
          link:
            'https://www.theaterdeveste.nl/nieuws/2378/De_Wereldband_zorgt_voor_vuurwerk_bij_jubileum_Koninklijke_Harmoniekapel_Delft/?fbclid=IwAR3SnLCZX8wRaWlaQjjDGxUiy4kGo_7Nw1I9baZSbKcJkcp5wkP6-fR6IbI',
          image: WereldBand,
        },
      ]}
    />
  </Page>
);

export default News;
