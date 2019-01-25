import React from 'react';

import Page from './Page';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-2.jpg';

const Contact = () => (
  <Page
    title="Tickets Wereldpremière Delftse Meesters"
    headerImage={HeaderImage}
  >
    <iframe
      src="https://www.ticketkantoor.nl/shop/delftsemeesters&embed=1"
      name="ticketshop"
      width="90%"
      height="750"
      frameborder="0"
      title="Kaartverkoop Delftse Meesters"
    />
  </Page>
);

export default Contact;
