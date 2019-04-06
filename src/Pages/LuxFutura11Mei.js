import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Page from './Page';
import {
  ConcertInfo,
  HighlightText,
  ImageRow,
  Paragraph,
  Title,
  Link,
} from '../components';
import HeaderImage from '../assets/images/kapel-nieuwe-kerk-2.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import KevinHouben from '../assets/images/kevin-houben.jpg';
import Kapel from '../assets/images/kapel.jpg';
import NieuweKerk from '../assets/images/nieuwe-kerk.jpg';
import ErikJanssen from '../assets/images/erik-janssen.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import SomethingExtraLogo from '../assets/images/partners/something-extra.png';
import EarlyBirdTickets from '../assets/images/early-bird-kaartverkoop.png';
import NmiLogo from '../assets/images/partners/nmi.png';
import KapelNieuweKerk from '../assets/images/kapel-nieuwe-kerk-1.jpg';
import CaptainsLogo from '../assets/images/partners/captains.png';

const DelftseMeesters11Mei = () => (
  <Page
    title="Wereldpremière Lux Futura 11 mei 2019"
    headerImage={HeaderImage}
    anchorItems={['Kaarten', 'Locatie', 'De cast', 'Partners']}
  >
    <Paragraph>
      Op 11 mei 2019 vindt er een weergaloze gala-wereldpremière plaats van{' '}
      <b>Lux Futura</b> in de Nieuwe Kerk. Tijdens deze avond word je bevangen
      door muziek:
      <ul>
        <li>
          vanuit het verleden; in de geest van Vermeer en De Hooch, door de
          alledaagse taferelen en muzikaliteit van de gouden eeuw gevangen in
          muzieknoten en lange symfonische lijnen.
        </li>
        <li>
          vanuit het heden en toekomst; er zal ook muziek van nu ten gehore
          komen, klanken die de vooruitgang van Delft weergeven en een blik
          werpen in de toekomst.
        </li>
        <li>
          en daar tussenin – als verbindende schakel – de gloednieuwe, nooit
          eerder uitgevoerde compositie van Kevin Houben, die hoogstpersoonlijk
          ook in de Nieuwe Kerk aanwezig zal zijn om deze grootse première mee
          te maken. Dat allemaal in een thematisch aangeklede en uitgelichte
          setting, met hopelijk (inter)nationale gasten op uitnodiging van de
          gemeente Delft, de Nieuwe Kerk en onze sponsoren, die dit spektakel
          mogelijk maken.
        </li>
      </ul>
    </Paragraph>
    <Title title="Concert Info" />
    <Paragraph style={{ justifyContent: 'center', display: 'flex' }}>
      <ConcertInfo
        title="Lux Futura"
        location="Nieuwe Kerk, Delft"
        address="Markt 80, 2611 GW Delft"
        date="11 mei 2019"
        time="20:15"
        price="€16,- early bird"
        image={KapelNieuweKerk}
      />
    </Paragraph>
    <Title title="Kaarten" />
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
          <Link to="/kaartverkoop-delftse-meesters">
            <img
              src={EarlyBirdTickets}
              style={{ width: '100%' }}
              alt="Early Bird kaartverkoop"
            />
          </Link>
        </div>
      </div>
    </Paragraph>
    <Paragraph>
      De kaartverkoop van de wereldpremière van de <b>Lux Futura</b> is gestart!
      Wees er snel bij en verzeker jezelf van early bird tickets! Tot ziens op
      11 mei.
    </Paragraph>
    <Paragraph>
      <Link to="/kaartverkoop-delftse-meesters" style={{ fontSize: 32 }}>
        Ga naar de kaartverkoop <FaArrowRight />
      </Link>
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
    <Title title="De cast" />

    <Paragraph rightImage={KevinHouben}>
      <HighlightText text="Kevin Houben" />
      De internationaal toonaangevende componist{' '}
      <Link to="https://www.kevinhouben.be/">Kevin Houben</Link> gaat de
      compositie schrijven. Zijn eerste 'stadssymfonie' voor de stad Peer
      (België) is afgelopen juni met groot succes ook in Parijs uitgevoerd, na
      een wereldpremière in 2017 door het Nationaal Orkest van België. Daarnaast
      zijn stukken van zijn hand uitgevoerd tijdens het dancefestival
      Tomorrowland, maar ook tijdens het grootste wereldmuziekfestival WMC in
      Kerkrade. Juist de combinatie van symfonische en moderne klanken maakt hem
      tot de perfecte componist voor het Delftse stuk.
    </Paragraph>

    <Paragraph rightImage={ErikJanssen}>
      <HighlightText text="Erik Janssen" />
      Sinds 2015 is Erik Janssen vaste dirigent van de Kapel. Hij staat bekend
      om zijn energie en muzikale interpretaties. Hij dirigeert professionele
      militaire kapellen, toonaangevende brassbands én grote harmonieorkesten in
      Nederland en ver daarbuiten. Erik startte zijn carrière als freelance
      trompettist in diverse bekende (beroeps)orkesten. Erik is ook gastdirigent
      bij diverse aansprekende orkesten in binnen- en buitenland. Hij treedt
      regelmatig op als jurylid en examinator. Daarnaast is Erik sinds 1990
      artistiek directeur bij uitgever Molenaar Edition in Wormerveer.
    </Paragraph>

    <Paragraph rightImage={Kapel}>
      <HighlightText text="Koninklijke Harmoniekapel Delft" />
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
      De wereldpremière van <b>Lux Futura</b> wordt mede mogelijk gemaakt door:
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
          {
            src: SomethingExtraLogo,
            alt: 'Something Extra',
            link: 'https://somethingextra.nl/',
            style: { maxWidth: 125 },
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
        ]}
      />
    </Paragraph>
  </Page>
);

export default DelftseMeesters11Mei;
