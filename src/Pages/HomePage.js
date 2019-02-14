import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Page from './Page';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-1.jpg';
import EarlyBirdTickets from '../assets/images/early-bird-kaartverkoop.png';
import { Link, News, Paragraph, Title } from '../components';

const HomePage = () => (
  <Page title="Delftse Meesters" headerImage={HeaderImage}>
    <Paragraph>
      <div
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
      >
        <div style={{ width: '70%' }}>
          <img
            src={EarlyBirdTickets}
            style={{ width: '100%' }}
            alt="Early Bird kaartverkoop"
          />
        </div>
      </div>
    </Paragraph>
    <Paragraph>
      De kaartverkoop van de wereldpremière van{' '}
      <b>
        <Link to="/wereldpremière-11-mei">Lux Futura</Link>
      </b>{' '}
      is gestart! Wees er snel bij en verzeker jezelf van early bird tickets!
      Tot ziens op <Link to="/wereldpremière-11-mei">11 mei</Link>.
    </Paragraph>
    <Paragraph>
      <Link to="/kaartverkoop-delftse-meesters" style={{ fontSize: 32 }}>
        Ga naar de kaartverkoop <FaArrowRight />
      </Link>
    </Paragraph>
    <Title title="Delftse Meesters" />
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
      <Link to="/wereldpremière-11-mei">11 mei</Link> de weergaloze
      gala-wereldpremière van <b>Lux Futura</b>.
    </Paragraph>
    <Paragraph>
      Ook vindt er op 25 mei een groots{' '}
      <Link to="/concertfestival-25-mei">concertfestival</Link> plaats, opnieuw
      in samenwerking met de Nieuwe Kerk. Tijdens dit festival laten diverse
      orkesten en bands van zich horen op de Markt in Delft. ’s Avonds staat een
      heuse uitvoering van <Link to="/maestro-25-mei">Maestro</Link> op het
      programma. Voor Delft en zijn inwoners komen de Delftse Meesters tot
      leven. Locatie: Nieuwe Kerk, Delft.
    </Paragraph>
    <Title title="Laatste Nieuws" />
    <News />
  </Page>
);

export default HomePage;
