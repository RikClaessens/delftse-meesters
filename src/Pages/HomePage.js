import React from 'react';
import styled from 'styled-components';

import Page from './Page';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-1.jpg';
import { Link, News, Paragraph, Title, TicketSale } from '../components';
import { colors, mediaQueries } from '../theme';

const linkStyle = {
  flex: 1,
  textTransform: 'uppercase',
  textAlign: 'center',
  color: colors.secondary,
  marginRight: 8,
  marginLeft: 8,
};

const StyledSpan = styled.span`
  flex: 1;
  font-size: 12px;
  margin-left: 2px;
  margin-right: 2px;
  text-align: center;
  @media ${mediaQueries.mobileM} {
    font-size: 16px;
    margin-left: 8px;
    margin-right: 8px;
  }
  @media ${mediaQueries.laptop} {
    font-size: 20px;
  }
`;

const HomePage = () => (
  <Page title="Delftse Meesters" headerImage={HeaderImage}>
    <Paragraph style={{ display: 'flex' }}>
      <Link
        to="/wereldpremière-11-mei"
        style={linkStyle}
        hoverStyle={{ color: colors.gold }}
      >
        <StyledSpan>
          wereldpremière
          <br />
          11 mei
        </StyledSpan>
      </Link>
      <Link
        to="/concertfestival-25-mei"
        style={linkStyle}
        hoverStyle={{ color: colors.gold }}
      >
        <StyledSpan>
          concertfestival
          <br />
          25 mei
        </StyledSpan>
      </Link>
      <Link
        to="/maestro-25-mei"
        style={linkStyle}
        hoverStyle={{ color: colors.gold }}
      >
        <StyledSpan>
          maestro
          <br />
          25 mei
        </StyledSpan>
      </Link>
    </Paragraph>
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
    <Title title="Kaartverkoop 11 mei" />
    <TicketSale />
    <Title title="Laatste Nieuws" />
    <News />
  </Page>
);

export default HomePage;
