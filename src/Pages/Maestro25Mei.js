import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title } from '../components';
import HeaderImage from '../assets/images/sheet-music.jpg';
import NieuweKerk from '../assets/images/nieuwe-kerk.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import DelftseMeesterOrkest from '../assets/images/delftse-meester-orkest.jpg';
import SomethingExtraLogo from '../assets/images/partners/something-extra.png';

const Maestro25Mei = () => {
  return (
    <Page
      title="Maestro 25 mei"
      headerImage={HeaderImage}
      anchorItems={['Locatie', 'De Dirigenten', 'Het orkest', 'Partners']}
    >
      <Paragraph>
        Het bekende televisieprogramma Maestro krijgt een heuse Delftse Editie
        met alle toeters en bellen die daarbij horen. Enkele bekende en minder
        bekende Delftenaren nemen het dirigeerstokje over van Erik Janssen om
        een fantastische én verrassende avond neer te zetten. Spannend wordt het
        zeker, want wie wordt de allereerste Delftse Maestro? De aspirant
        Maestro’s moeten alles uit de kast halen om het speciaal voor de
        gelegenheid samengestelde en aangeklede Delftse Meester orkest zo mooi
        mogelijk te laten klinken. Een jury bestaande uit Erik Janssen en twee
        bekende Delftenaren beoordeelt de aspirant Maestro’s kundig.
      </Paragraph>

      <Title title="Locatie" />
      <Paragraph leftImage={NieuweKerk}>
        <HighlightText text="De Nieuwe Kerk" />
        De Nieuwe Kerk in Delft is een prominent kerkgebouw aan de Markt in het
        centrum van de stad. De kerk is de huiskamer van de stad Delft. De toren
        is met 108,75 meter, na de Domtoren in Utrecht, de hoogste kerktoren van
        Nederland. De kerk geniet bekendheid vanwege het praalgraf van de vader
        des vaderlands Willem van Oranje. Onder het praalgraf bevinden zich de
        grafkelders van Oranje-Nassau, de grafkelders van ons Koninklijk Huis.
      </Paragraph>

      <Title title="De Dirigenten" />
      <Paragraph>
        Wie gaan de strijd aan voor de titel Maestro tijdens onze eigen Delftse
        Editie? Binnenkort maken we hier bekend welke kandidaten dit zullen
        zijn.
      </Paragraph>
      <Title title="Het orkest" />
      <Paragraph>
        <HighlightText text="Het Delftse Meester Orkest" />
        Speciaal voor deze gelegenheid wordt er een samengesteld Delftse Meester
        orkest gecreëerd, bestaande uit muzikanten van de Koninklijke
        Harmoniekapel én de Kleine Harmonie. Wat betekent dat de aspirant
        Maestro’s meer dan honderd muzikanten onder hun hoede krijgen.
      <Paragraph rightImage={DelftseMeesterOrkest} />
      <Title title="Partners" />
      <Paragraph>
        Het Delftse Meesters festival wordt mede mogelijk gemaakt door:
        <ImageRow
          images={[
            { src: GemeenteDelft, alt: 'Gemeente Delft' },
            { src: NieuweKerkLogo, alt: 'Nieuwe Kerk' },
          ]}
        />
        <ImageRow
          images={[
            {
              src: SomethingExtraLogo,
              alt: 'Something Extra',
              style: { maxWidth: 100 },
            },
          ]}
        />
      </Paragraph>
    </Page>
  );
};

export default Maestro25Mei;
