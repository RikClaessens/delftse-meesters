import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title, Link } from '../components';
import HeaderImage from '../assets/images/zomerconcert-kleine-harmonie.jpg';
import KleineHarmonie from '../assets/images/kleine-harmonie.jpg';
import AlderValleyBrass from '../assets/images/alder-valley-brass.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import NmiLogo from '../assets/images/partners/nmi.png';

const ConcertFestival25Mei = () => (
  <Page
    title="Concertfestival 25 Mei"
    headerImage={HeaderImage}
    anchorItems={['Deelnemers', 'Partners']}
  >
    <Paragraph>
      Op 25 mei wordt er een groots concertfestival gehouden waaraan niet alleen
      onze eigen Kleine Harmonie aan deelneemt, maar waar ook verschillende
      orkesten uit binnen- en buitenland te gast zijn. Overdag is de Markt in
      Delft de speelplaats voor het Delftse Meesters Festival met een groot
      podium. Heel Delft is uitgenodigd om te genieten van deze grote happening.
      's Avonds vindt er een spetterende uitvoering van de nieuwe Delftse
      compositie – <b>Lux Futura</b> - en een heuse uitvoering van de Delftse
      editie van het bekende tv-programma{' '}
      <Link to="/maestro-25-mei">Maestro</Link>, waar enkele bekende Delftenaren
      het dirigeerstokje overnemen van Erik Janssen om een fantastische én
      verrassende avond neer te zetten.
    </Paragraph>
    <Title title="Deelnemers" />

    <Paragraph rightImage={AlderValleyBrass}>
      <HighlightText text="Alder Valley Brass" />
      Alder Valley Brass is een Engelse Brass Band uit de plaats Farnham, ten
      zuid-oosten van Londen. Ze spelen inmiddels al meer dan 50 jaar in
      allerlei concertlocaties zoals de Londense Royal Albert Hall en Windsor
      Castle. Ook tourt de band regelmatig door het buitenland, met trips naar
      Duitsland, Zwitserland, België en in 2019 opnieuw naar Nederland. De band
      zet zich ontzettend in voor allerlei lokale goede doelen zoals "Help for
      Heroes" en het ondersteunen van het Koninklijk Britse legioen.
    </Paragraph>

    <Paragraph rightImage={KleineHarmonie}>
      <HighlightText text="De Kleine Harmonie" />
      De Kleine Harmonie Delft is een harmonieorkest van ongeveer 40 muzikanten.
      Het motto van de Kleine Harmonie is - samen gevarieerde en toegankelijke
      muziek maken op een uitdagend niveau - en staat al sinds 2002 met veel
      enthousiasme onder leiding van Carel Piguillet. De Kleine Harmonie geeft
      concerten met gevarieerde thema's van opera's tot sprookjes tot het
      Eurovisie Songfestival, op verschillende locaties in Delft zoals de
      botanische tuin en X het cultuurcentrum van de TU en het jaarlijkse
      Koningsdagconcert op het Doelenplein. Daarnaast is de kleine harmonie een
      graag gezien gast bij Abtswoude bloeit en Werkse.
    </Paragraph>

    <Title title="Partners" />
    <Paragraph>
      Het Delftse Meesters festival wordt mede mogelijk gemaakt door:
      <ImageRow
        images={[
          {
            src: GemeenteDelft,
            alt: 'Gemeente Delft',
            link: 'https://www.delft.nl/',
          },
          {
            src: NieuweKerkLogo,
            alt: 'Nieuwe Kerk',
            link: 'https://oudeennieuwekerkdelft.nl/',
          },
        ]}
      />
      <ImageRow
        images={[
          {
            src: NmiLogo,
            alt: 'NMI',
            link: 'https://www.nmi.nl/nl/',
            style: { maxWidth: 150 },
          },
        ]}
      />
    </Paragraph>
  </Page>
);

export default ConcertFestival25Mei;
