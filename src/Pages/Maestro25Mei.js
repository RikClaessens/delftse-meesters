import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title } from '../components';
import HeaderImage from '../assets/images/sheet-music.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import Kapel from '../assets/images/kapel.jpg';

const Maestro25Mei = () => (
  <Page title="Maestro 25 mei" headerImage={HeaderImage}>
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
    <Title title="Het orkest" />

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

export default Maestro25Mei;
