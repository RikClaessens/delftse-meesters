import React from 'react';

import Page from './Page';
import {
  ConcertInfo,
  HighlightText,
  ImageRow,
  Paragraph,
  Title,
} from '../components';
import HeaderImage from '../assets/images/sheet-music.jpg';
import NieuweKerk from '../assets/images/nieuwe-kerk.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import DelftseMeesterOrkest from '../assets/images/delftse-meester-orkest.jpg';
import KapelNieuweKerk from '../assets/images/kapel-nieuwe-kerk-6.jpg';
import SomethingExtraLogo from '../assets/images/partners/something-extra.png';
import RabobankCoopFonds from '../assets/images/partners/rabobank-cooperatie-fonds.png';
import Fonds1818 from '../assets/images/partners/fonds1818.png';
import NmiLogo from '../assets/images/partners/nmi.png';
import CaptainsLogo from '../assets/images/partners/captains.png';
import AHXLLogo from '../assets/images/partners/ah-xl.png';
import PrintPlezierLogo from '../assets/images/partners/printplezier.png';
import RodiLogo from '../assets/images/partners/rodi.png';

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

      <Title title="Concert Info" />
      <Paragraph style={{ justifyContent: 'center', display: 'flex' }}>
        <ConcertInfo
          location="Nieuwe Kerk, Delft"
          address="Markt 80, 2611 GW Delft"
          date="25 mei 2019"
          time="20:15"
          price="gratis"
          image={KapelNieuweKerk}
        />
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
      </Paragraph>
      <Paragraph rightImage={DelftseMeesterOrkest} />
      <Title title="Partners" />
      <Paragraph style={{ textAlign: 'center' }}>
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
              src: Fonds1818,
              alt: 'Fonds 1818',
              style: { maxWidth: 200 },
              link: 'https://www.fonds1818.nl/',
            },
            {
              src: RabobankCoopFonds,
              alt: 'Rabobank Coöperatie Fonds',
              link: 'https://www.rabobankcooperatiefonds.nl/wat-het/',
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
            {
              src: SomethingExtraLogo,
              alt: 'Something Extra',
              style: { maxWidth: 125 },
              link: 'https://somethingextra.nl/',
            },
          ]}
        />
        <ImageRow
          images={[
            {
              src: CaptainsLogo,
              alt: 'Captains',
              link: 'https://captains.nl/',
              style: { maxWidth: 175 },
            },
            {
              src: AHXLLogo,
              alt: 'Albert Heijn XL Delft',
              link:
                'https://www.ah.nl/winkel/albert-heijn/delft/martinus-nijhofflaan/1147',
              style: { maxWidth: 175 },
            },
          ]}
        />
        <ImageRow
          images={[
            {
              src: PrintPlezierLogo,
              alt: 'Print Plezier',
              link: 'https://printplezier.nl',
            },
            {
              src: RodiLogo,
              alt: 'Rodi Media Zuid Holland',
              link: 'https://www.rodimedia-zh.nl/',
              style: { maxWidth: 175 },
            },
          ]}
        />
      </Paragraph>
    </Page>
  );
};

export default Maestro25Mei;
