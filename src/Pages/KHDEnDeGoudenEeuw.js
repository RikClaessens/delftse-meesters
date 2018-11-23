import React from 'react';

import Page from './Page';
import { Link, Paragraph } from '../components';
import HeaderImage from '../assets/images/Delft.jpg';

const KHDEnDeGoudenEeuw = () => (
  <Page
    title="Koninklijke Harmoniekapel en de Gouden Eeuw"
    headerImage={HeaderImage}
  >
    <Paragraph>
      In 2019 staat het landelijke themajaar <b>de Gouden Eeuw</b> volledig
      centraal bij de Koninklijke Harmoniekapel en Delft. Als gouden eeuw-stad
      heeft Delft meer dan genoeg 'goud' in handen, met schilders als Jan
      Vermeer, Pieter de Hooch en Jan Steen, en ook 'Grootse Nederlanders'
      Antoni van Leeuwenhoek en Hugo de Groot en het koningshuis. Verder is
      Delft in de loop der tijd, mede door de TU Delft, uitgegroeid tot een stad
      van innovatie, technische hoogstandjes, van wereldnieuws met zonneauto's
      en -boten, de Hyperloop en quantumcomputers.
    </Paragraph>
    <Paragraph>
      De Koninklijke Harmoniekapel zet in 2019 bij de keuze van muziek, de
      optredens en andere uitingen 'De Gouden Eeuw' centraal, waarin de promotie
      van de stad Delft een prominente plek krijgt. Voor dit themajaar wordt een
      compositie geschreven door componist Kevin Houben. Dit muziekstuk – met
      als werktitel Delftse Meesters – zet Delft op de kaart, met een zweem uit
      het verleden en een blik op de toekomst. De veelzijdigheid van Delft zal
      hierin heel zichtbaar en hoorbaar worden. Nooit eerder is er een werk
      geschreven speciaal voor Delft en over Delft. De compositie beleeft haar
      wereldpremière op <Link to="/delftse-meesters-11-mei">11 mei</Link> 2019,
      het themajaar Delft & de Gouden Eeuw, tijdens een evenement waar alle
      Delftenaren en Delvenaren welkom zijn. Twee weken later zal de compositie
      nog een keer te horen zijn op het concertfestival op{' '}
      <Link to="/concertfestival-25-mei">25 mei</Link> voor iedereen en vooral
      voor alle inwoners van Delft. Hierna zal het de wereld in gaan, voorzien
      van een Delftse stempel. Blaasmuziek wordt over de gehele wereld gespeeld,
      zeker in voor Delft zo belangrijke landen als de VS, Spanje, China en
      Japan.
    </Paragraph>
  </Page>
);

export default KHDEnDeGoudenEeuw;
