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

import TimVanDerHagen from '../assets/images/maestros/TimVanDerHagen.jpg';
import AstridDijksman from '../assets/images/maestros/AstridDijksman.jpg';
import GabriellePonjee from '../assets/images/maestros/GabriellePonjee.jpg';

const Maestro25Mei = () => {
  return (
    <Page
      title="Maestro 25 mei"
      headerImage={HeaderImage}
      anchorItems={['Locatie', 'De Maestros', 'Het orkest', 'Partners']}
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

      <Title title="De Maestros" />
      <Paragraph>
        Met trots presenteren wij u onze Maestro’s! Na een strenge doch
        vriendelijke selectie gaan wij het avontuur aan met niemand minder dan:{' '}
        <b>Tim van der Hagen</b> – Rector Magnificus van de TU Delft;{' '}
        <b>Astrid Dijksman</b> – Stadsprinses Astrid de 1e Kabbelaar de 43e; en{' '}
        <b>Gabrielle Ponjee</b> - winnaar van de verkiezing ‘Derde Delftse
        Maestro’.
      </Paragraph>
      <Paragraph>Hieronder stellen zij zich aan u voor:</Paragraph>
      <Paragraph rightImage={TimVanDerHagen} imageStyle={{ width: '60%' }}>
        <HighlightText text="Tim van der Hagen" />
        Ik ben een fan van het televisieprogramma Maesto en ik vind het
        fascinerend om te zien hoe lastig het blijkt te zijn om een orkest te
        dirigeren. Daarnaast is het natuurlijk heel grappig om te zien wat er
        gebeurt als je geen goede aanwijzingen geeft.
        <br />
        <br />
        Ik maak zelf ook muziek, ik speel gitaar en piano. Niet in een orkest
        maar in popbandjes. Ook ga ik graag naar concerten en jazz-optredens.
        <br />
        <br />
        Een goede Maestro is voor mij iemand die het orkest kan meenemen om
        samen prachtige muziek te maken.
      </Paragraph>
      <Paragraph rightImage={AstridDijksman} imageStyle={{ width: '60%' }}>
        <HighlightText text="Astrid Dijksman" />
        Deelnemen aan de Delftse Maestro is voor mij een geweldige ervaring. Ik
        ben zeer benieuwd naar het leiderschap van de dirigent over een orkest.
        Het heeft voor mij iets magisch, zeker omdat het elke dirigent zijn
        eigen stijl hanteert en het toch altijd werkt.
        <br />
        <br />
        Ik hou erg van zingen en dansen, en dat gaat verder dan alleen hossen
        met carnaval! Als tiener heb ik kort xylofoon gespeeld. Het kwam er niet
        van om hiermee verder te gaan. Ik ben nu wel leerling-trommelaar bij
        Dameskapel 3igenwijs. Dat is geweldig, ook al heb ik nog veel te leren.
        De Harmoniekapel ken ik van de optredens tijdens Koningsdag en ook de
        afgelopen Nieuwjaarsbijeenkomst van de gemeente.
        <br />
        <br />
        Een goede Maestro is voor mij iemand die veel gevoel voor allerlei
        muzieksoorten en instrumenten heeft en vooral goed kan luisteren. En
        natuurlijk mensen kunnen stimuleren en stressbestendig zijn!
      </Paragraph>
      <Paragraph rightImage={GabriellePonjee} imageStyle={{ width: '60%' }}>
        <HighlightText text="Gabrielle Ponjee" />
        Ik ben een groot bewonderaar van het kunstenaarschap van dirigenten. Met
        het deelnemen aan de Delftse Maestro komt een droom uit: altijd al wil
        ik een keer een orkest dirigeren. Het lijkt me zo ongelofelijk moeilijk
        en tegelijkertijd mooi om je persoonlijke stijl in een orkestraal stuk
        te kunnen leggen.
        <br />
        <br />
        Klassieke muziek zit mij in het bloed. Ik heb pianolessen gehad en zing
        nu in het Delftse oratoriumnkoor Cantarella. Ook bezoek ik graag
        concerten, zowel klassiek als RenB en jazz. De Harmoniekapel ken ik van
        hun optredens bij de taptoe en op Koningsdag.
        <br />
        <br />
        Een goede Maestro is voor mij iemand die naast een strakke discipline
        ook zijn/haar gevoel en passie voor de muziek weet over te dragen op het
        orkest, zodat de muziek ‘vleugels’ krijgt en het publiek raakt. Het is
        het samengaan van management en kunstenaarschap op hoog niveau.
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
