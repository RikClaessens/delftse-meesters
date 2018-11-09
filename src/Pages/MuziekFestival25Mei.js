import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title } from '../components';
import HeaderImage from '../assets/images/Zomerconcert-KHD-2.jpg';
import Kapel from '../assets/images/kapel.jpg';
import KleineHarmonie from '../assets/images/kleine-harmonie.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';

const MuziekFestival25Mei = () => (
  <Page
    title="Muziek Festival 25 Mei"
    headerImage={HeaderImage}
    anchorItems={['Deelnemers', 'Maestro', 'Partners']}
  >
    <Paragraph>
      Op 25 mei wordt er een grootst HaFaBra festival georganiseerd waaraan niet
      alleen onze eigen orkesten aan deelnemen, de Kapel en de Kleine Harmonie,
      maar waar ook verschillende orkesten van binnen en buitenland te gast
      zijn. Overdag is de markt in Delft de speelplaats voor het Delftse
      Meesters Festival met een groot podia. Heel Delft is uitgenodigd om te
      genieten van deze grote happening. In de avond zal er een spetterende
      afsluiting zijn in de nieuwe kerk met de publieke première van de
      compositie ‘de Delftse Meesters’ en een maestro event waar enkele bekende
      Delftenaren het dirigeerstokje overnemen van Erik Janssen om een
      fantastische avond neer te zetten.
    </Paragraph>
    <Title title="Deelnemers" />
    <HighlightText text="De Kapel" />
    <Paragraph leftImage={Kapel}>
      De Koninklijke Harmoniekapel is een harmonieorkest bestaande uit zo’n 90
      muzikanten dat zich tot de beste blaasorkesten van de Randstad mag
      rekenen. Sinds 2015 staat het orkest onder de bezielende leiding van Erik
      Janssen. Met uitvoeringen als The Queen Symphony met Leo Blokhuis in een
      uitverkochte TU Aula, het jaarlijkse Koningsdagconcert op het Doelenplein
      en optredens op tal van locaties in Delft, zoals Theater De Veste, de
      Nieuwe Kerk en Lijm & Cultuur, is de Harmoniekapel een belangrijke speler
      in het muzikale en culturele Delftse leven.
    </Paragraph>
    <HighlightText text="De Kleine Harmonie" />
    <Paragraph rightImage={KleineHarmonie}>
      De Kleine Harmonie Delft is een harmonieorkest van ongeveer 40 muzikanten.
      Het motto van de Kleine Harmonie is - samen gevarieerde en toegankelijke
      muziek maken op een uitdagend niveau - en staat al sinds 2002 met veel
      enthousiasme onder leiding van Carel Piguillet. De Kleine Harmonie geeft
      concerten met gevarieerde thema’s van opera’s tot sprookjes tot het
      Eurovisie Songfestival, op verschillende locaties in Delft zoals de
      botanische tuin en X het cultuurcentrum van de TU en het jaarlijkse
      Koningsdagconcert op het Doelenplein. Daarnaast is de kleine harmonie een
      graag gezien gast bij Abtswoude bloeit en Werkse.
    </Paragraph>
    <Title title="Maestro" />
    <Title title="Partners" />
    <Paragraph>
      Het Delftse Meesters festival wordt mede mogelijk gemaakt door:
      <ImageRow images={[{ src: GemeenteDelft, alt: 'Gemeente Delft' }]} />
    </Paragraph>
  </Page>
);

export default MuziekFestival25Mei;
