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

import TimVanDerHagen from '../assets/images/maestro/TimVanDerHagen.jpg';
import AstridDijksman from '../assets/images/maestro/AstridDijksman.jpg';
import GabriellePonjee from '../assets/images/maestro/GabriellePonjee.jpg';
import MarjaVanBijsterveldt from '../assets/images/maestro/MarjaVanBijsterveldt.jpg';
import BerryVisser from '../assets/images/maestro/BerryVisser.jpg';
import ErikJanssen from '../assets/images/erik-janssen.jpg';
import BasPollard from '../assets/images/maestro/BasPollard.jpg';
import HenkNichting from '../assets/images/maestro/HenkNichting.jpg';

const Maestro25Mei = () => {
  return (
    <Page
      title="Maestro 25 mei"
      headerImage={HeaderImage}
      anchorItems={[
        'Locatie',
        'De Maestros',
        'De Jury',
        'De Cast',
        'Het orkest',
        'Partners',
      ]}
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
        bekende Delftenaren beoordeelt de aspirant Maestro’s kundig. De
        Maestro’s worden tijdens hun Maestro avontuur begeleid door coach Bas
        Pollard.
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
      <Paragraph rightImage={TimVanDerHagen} imageStyle={{ width: '50%' }}>
        <HighlightText text="Tim van der Hagen" />
        <i>
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
        </i>
      </Paragraph>
      <Paragraph rightImage={AstridDijksman} imageStyle={{ width: '50%' }}>
        <HighlightText text="Astrid Dijksman" />
        <i>
          Deelnemen aan de Delftse Maestro is voor mij een geweldige ervaring.
          Ik ben zeer benieuwd naar het leiderschap van de dirigent over een
          orkest. Het heeft voor mij iets magisch, zeker omdat het elke dirigent
          zijn eigen stijl hanteert en het toch altijd werkt.
          <br />
          <br />
          Ik hou erg van zingen en dansen, en dat gaat verder dan alleen hossen
          met carnaval! Als tiener heb ik kort xylofoon gespeeld. Het kwam er
          niet van om hiermee verder te gaan. Ik ben nu wel leerling-trommelaar
          bij Dameskapel 3igenwijs. Dat is geweldig, ook al heb ik nog veel te
          leren. De Harmoniekapel ken ik van de optredens tijdens Koningsdag en
          ook de afgelopen Nieuwjaarsbijeenkomst van de gemeente.
          <br />
          <br />
          Een goede Maestro is voor mij iemand die veel gevoel voor allerlei
          muzieksoorten en instrumenten heeft en vooral goed kan luisteren. En
          natuurlijk mensen kunnen stimuleren en stressbestendig zijn!
        </i>
      </Paragraph>
      <Paragraph rightImage={GabriellePonjee} imageStyle={{ width: '50%' }}>
        <HighlightText text="Gabrielle Ponjee" />
        <i>
          Ik ben een groot bewonderaar van het kunstenaarschap van dirigenten.
          Met het deelnemen aan de Delftse Maestro komt een droom uit: altijd al
          wil ik een keer een orkest dirigeren. Het lijkt me zo ongelofelijk
          moeilijk en tegelijkertijd mooi om je persoonlijke stijl in een
          orkestraal stuk te kunnen leggen.
          <br />
          <br />
          Klassieke muziek zit mij in het bloed. Ik heb pianolessen gehad en
          zing nu in het Delftse oratoriumnkoor Cantarella. Ook bezoek ik graag
          concerten, zowel klassiek als RenB en jazz. De Harmoniekapel ken ik
          van hun optredens bij de taptoe en op Koningsdag.
          <br />
          <br />
          Een goede Maestro is voor mij iemand die naast een strakke discipline
          ook zijn/haar gevoel en passie voor de muziek weet over te dragen op
          het orkest, zodat de muziek ‘vleugels’ krijgt en het publiek raakt.
          Het is het samengaan van management en kunstenaarschap op hoog niveau.
        </i>
      </Paragraph>
      <Title title="De Jury" />
      <Paragraph>
        Zonder jury geen Maestro! Onze talentvolle en spraakmakende Maestro’s
        worden tijdens de Maestro-avond op 25 mei vakkundig gejureerd door:
        Jury-voorzitter burgemeester <b>Marja van Bijsterveldt</b>,{' '}
        MOJO-oprichter <b>Berry Visser</b> en onze eigen dirigent{' '}
        <b>Erik Janssen</b>{' '}
      </Paragraph>
      <Paragraph
        rightImage={MarjaVanBijsterveldt}
        imageStyle={{ width: '60%' }}
      >
        <HighlightText text="Marja van BijsterVeldt" />
        Sinds 2016 is Marja van Bijsterveldt burgemeester van Delft. Met veel
        plezier reikt ze de prijzen uit aan de Delftse Meesters.
        <br />
        <br />
        <i>
          Een geweldig evenement in het Delftse Gouden Eeuw-jaar. Delftse
          Meesters waren er altijd en ze zijn er nog steeds! Ik kan me een leven
          zonder muziek niet voorstellen. Ik kan enorm genieten van klassieke
          muziek. En vandaag is het ook heerlijk om zoveel muziek in onze
          prachtige Nieuwe Kerk te horen.
        </i>
      </Paragraph>
      <Paragraph rightImage={BerryVisser} imageStyle={{ width: '60%' }}>
        <HighlightText text="Berry Visser" />
        Gedreven door zijn passie voor popmuziek start Delftenaar Berry Visser
        in 1968 het eenmansbedrijf MOJO Concerts. Met enige bluf weet hij in
        Londen meerdere bands te strikken voor het eerste meerdaagse festival
        van Nederland: het Holland Pop Festival in het Kralingse Bos. Kort
        daarna haakt Leon Ramakers aan, eerst als Berry’s assistent en al snel
        als zijn partner. Samen organiseren zij vele concerten en festivals die
        tot op de dag vandaag tienduizenden bezoekers trekken, zoals Lowlands en
        Pinkpop.
        <br />
        <br />
        Berry Visser creëerde onlangs het futuristische sprookje Het Verborgen
        Huis van Madame de Berry, een surrealistische voorstelling op de
        zondagmiddagen in zijn huis aan een van de grachten in Delft. Met zijn
        grote staat van dienst in de muziekindustrie is Berry Visser het ideale
        jurylid van de Delftse editie van Maestro.
      </Paragraph>
      <Paragraph rightImage={ErikJanssen} imageStyle={{ width: '60%' }}>
        <HighlightText text="Erik Janssen" />
        Sinds 2015 is Erik Janssen vaste dirigent van de Kapel. Hij staat bekend
        om zijn energie en muzikale interpretaties. Hij dirigeert professionele
        militaire kapellen, toonaangevende brassbands én grote harmonieorkesten
        in Nederland en ver daarbuiten. Erik startte zijn carrière als freelance
        trompettist in diverse bekende (beroeps)orkesten. Erik is ook
        gastdirigent bij diverse aansprekende orkesten in binnen- en buitenland.
        Hij treedt regelmatig op als jurylid en examinator. Daarnaast is Erik
        sinds 1990 artistiek directeur bij uitgever Molenaar Edition in
        Wormerveer.
      </Paragraph>
      <Title title="De cast" />
      <Paragraph rightImage={BasPollard} imageStyle={{ width: '40%' }}>
        <HighlightText text="Bas Pollard" />
        Al in 2011 werd dirigent en hoornist Bas Pollard een
        televisiepersoonlijkheid door zijn serie ‘Dirigeren met Bas Pollard’ bij
        de VPRO. Daarna werkte hij als coach voor de deelnemers bij het
        televisieprogramma Maestro van AVROTROS. In het dagelijks leven is Bas
        Pollard dirigent bij verschillende orkesten en docent op het
        Conservatorium van Amsterdam.
      </Paragraph>
      <Paragraph rightImage={HenkNichting} imageStyle={{ width: '40%' }}>
        <HighlightText text="Henk Nichting" />
        Henk Nichting heeft een klassieke piano-opleiding gevolgd aan het
        Rotterdams Conservatorium (nu Codarts) bij Istvan Hajdu en Michael
        Davidson. Hij is 35 jaar werkzaam geweest bij Codarts Dans als pianist.
        Momenteel werkt hij als docent en begeleider bij het Hellendaal
        Rotterdams Muziekinstituut voor jonge, talentvolle kinderen. Daarnaast
        heeft hij thuis een prive-lespraktijk en werkt hij als freelance
        pianist. Bij vele concoursen, audities en andere muzikale activiteiten
        is hij als begeleider actief.
        <br />
        Tijdens de eerste workshop dirigeren zullen de Maestro kandidaten
        muzikaal begeleid worden op piano door Henk Nichting.
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
