import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title } from '../components';
import HeaderImage from '../assets/images/zomerconcert-kleine-harmonie.jpg';
import Kapel from '../assets/images/kapel.jpg';
import KleineHarmonie from '../assets/images/kleine-harmonie.jpg';
import AlderValleyBrass from '../assets/images/alder-valley-brass.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';

const ConcertFestival25Mei = () => (
  <Page
    title="Concertfestival 25 Mei"
    headerImage={HeaderImage}
    anchorItems={['Deelnemers', 'Partners']}
  >
    <Paragraph>
      Op 25 mei wordt er een groots concertfestival gehouden waaraan niet alleen
      onze eigen orkesten aan deelnemen, de Kapel en de Kleine Harmonie, maar
      waar ook verschillende orkesten uit binnen- en buitenland te gast zijn.
      Overdag is de Markt in Delft de speelplaats voor het Delftse Meesters
      Festival met een groot podium. Heel Delft is uitgenodigd om te genieten
      van deze grote happening. 's Avonds vindt er een spetterende een
      uitvoering van de nieuwe Delftse compositie – werktitel Delftse Meesters -
      en een heuse uitvoering van de Delftse editie van het bekende tv-programma
      Maestro, waar enkele bekende Delftenaren het dirigeerstokje overnemen van
      Erik Janssen om een fantastische én verrassende avond neer te zetten.
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

    <Paragraph rightImage={Kapel}>
      <HighlightText text="De Kapel" />
      De Koninklijke Harmoniekapel is een harmonieorkest bestaande uit zo'n 90
      muzikanten dat zich tot de beste blaasorkesten van de Randstad mag
      rekenen. Sinds 2015 staat het orkest onder de bezielende leiding van Erik
      Janssen. Met uitvoeringen als The Queen Symphony met Leo Blokhuis in een
      uitverkochte TU Aula, het jaarlijkse Koningsdagconcert op het Doelenplein
      en optredens op tal van locaties in Delft, zoals Theater De Veste, de
      Nieuwe Kerk en Lijm & Cultuur, is de Harmoniekapel een belangrijke speler
      in het muzikale en culturele Delftse leven.
    </Paragraph>
    <Title title="Partners" />
    <Paragraph>
      Het Delftse Meesters festival wordt mede mogelijk gemaakt door:
      <ImageRow
        images={[
          { src: GemeenteDelft, alt: 'Gemeente Delft' },
          { src: NieuweKerkLogo, alt: 'Nieuwe Kerk' },
        ]}
      />
    </Paragraph>
  </Page>
);

export default ConcertFestival25Mei;
