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
      horen en de Delftenaren meenemen in het verleden, heden en toekomst.
      Speciaal voor Delft laat de Koninklijke Harmoniekapel een muziekstuk
      componeren voor het themajaar. Dit muziekstuk kan alleen tot stand komen
      door de samenwerking met de bewoners van Delft, de gemeente Delft en
      verschillende organisaties binnen Delft zoals onder andere de nieuwe kerk.
      Dit muziekstuk – met als werktitel Delftse Meesters – beleeft op{' '}
      <Link to="/delftse-meesters-11-mei">11 mei</Link> een weergaloze
      gala-wereldpremière in de nieuwe kerk.
    </Paragraph>
    <Paragraph>
      Daarnaast zal er op <Link to="/muziek-festival-25-mei">25 mei</Link> een
      grootst HaFaBra festival plaatsvinden waar diverse orkesten hun beste spel
      laten horen op de Markt in Delft. In de avond zal de{' '}
      <b>Delftse Meesters</b> voor iedereen en vooral alle Delftenaren te horen
      zijn in de nieuwe kerk.
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
