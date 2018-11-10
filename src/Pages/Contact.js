import React from 'react';

import Page from './Page';
import { Paragraph, Title } from '../components';
import HeaderImage from '../assets/images/OnbegrensdGenieten2018-17.jpg';

const Contact = () => (
  <Page title="Contact" headerImage={HeaderImage}>
    <Paragraph>
      Mocht je vragen hebben over de Delftse Meesters, het programma,
      kaartverkoop of nog andere zaken, neem dan gerust contact op met ons!
    </Paragraph>
    <Title title="Email" />
    <Paragraph>
      Het email adres van Delftse Meesters is{' '}
      <a href="mailto:delftsemeesters@harmoniedelft.nl">
        delftsemeesters@harmoniedelft.nl
      </a>
    </Paragraph>
    <Title title="Secretariaat / Postadres" />
    <Paragraph>
      Het adres van het secretariaat van de Koninklijke Harmoniekapel Delft:
      <br />
      <br />
      Hollandsche Tuyn 72
      <br />
      2645 HK Delfgauw
      <br />
      Secretaris Sietske Derksen
      <br />
      06-51536733
      <br />
      <a href="mailto:info@harmoniekapel.nl">info@harmoniekapel.nl</a>
    </Paragraph>
  </Page>
);

export default Contact;
