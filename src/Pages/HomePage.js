import React from 'react';

import Page from './Page';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-1.jpg';
import { Link, NewsRow, Paragraph, Title } from '../components';

import KevinAndThijs from '../assets/images/kevin-houben-en-voorzitter-thijs.jpg';

const HomePage = () => (
  <Page title="Delftse Meesters" headerImage={HeaderImage}>
    <Paragraph>
      Delft kleurt in 2019 goud! Samen met acht andere Nederlandse steden sluit
      Delft in 2019 aan bij het landelijke themajaar <b>de Gouden Eeuw</b>. Een
      uniek evenement is daarmee aanstaande, waarin de Koninklijke Harmoniekapel
      een prominente plek wil innemen.
    </Paragraph>
    <Paragraph>
      De Koninklijke Harmoniekapel zal in 2019 meerdere keren van zich laten
      horen en de Delftenaren meenemen in het verleden, heden en de toekomst.
      Speciaal voor Delft laat de Koninklijke Harmoniekapel een muziekstuk
      componeren voor het themajaar. Dit muziekstuk kan alleen tot stand komen
      door de samenwerking met de bewoners van Delft, de gemeente Delft en
      verschillende organisaties binnen Delft. Samen met de Nieuwe Kerk
      organiseert de Koninklijke Harmoniekapel op{' '}
      <Link to="/delftse-meesters-11-mei">11 mei</Link> de weergaloze
      gala-wereldpremière van dit muziekstuk, dat de werktitel Delftse Meesters
      draagt.
    </Paragraph>
    <Paragraph>
      Ook vindt er op <Link to="/concertfestival-25-mei">25 mei</Link> een
      groots concertfestival plaats, opnieuw in samenwerking met de Nieuwe Kerk.
      Tijdens dit festival laten diverse orkesten en bands van zich horen op de
      Markt in Delft. ’s Avonds staat een heuse uitvoering van Maestro op het
      programma. Voor Delft en zijn inwoners komen de Delftse Meesters tot
      leven. Locatie: Nieuwe Kerk, Delft.
    </Paragraph>
    <Title title="Laatste Nieuws" />
    <NewsRow
      items={[
        {
          title: 'Ideeën muziekstuk voor Delft',
          link: 'ideeen-muziekstuk-voor-delft',
          image: KevinAndThijs,
        },
      ]}
    />
  </Page>
);

export default HomePage;
