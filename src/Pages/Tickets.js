import React from 'react';

import Page from './Page';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-2.jpg';

const Contact = () => (
  <Page title="Tickets Wereldpremière Lux Futura" headerImage={HeaderImage}>
    <iframe
      src="https://www.ticketkantoor.nl/shop/delftsemeesters&embed=1"
      name="ticketshop"
      width="90%"
      height="750"
      frameborder="0"
      title="Kaartverkoop Wereldpremière Lux Futura"
    />
  </Page>
);

export default Contact;
