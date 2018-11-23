import React from 'react';

import Page from '../Page';
import { Link, Paragraph, Title } from '../../components';
import HeaderImage from '../../assets/images/kapel-westcord-2.jpg';
import KevinAndThijs from '../../assets/images/kevin-houben-en-voorzitter-thijs.jpg';

const Contact = () => (
  <Page title="Ideeën muziekstuk voor Delft" headerImage={HeaderImage}>
    <Paragraph>
      Een muziekstuk met een glimp uit het verleden en een blik op de toekomst –
      het muzikale visitekaartje van Delft. De Koninklijke Harmoniekapel Delft
      (KHD) laat een muziekstuk componeren speciaal voor het themajaar Delft &
      de Gouden Eeuw. Van grootse Delftse schilders tot aan de Hyperloop, het
      wordt een werk dat de veelzijdigheid van Delft omvat en een muziekstuk
      voor en door de stad. Wat mag er dan volgens de Delftenaren in deze
      compositie niet ontbreken? De knallen van het pistool van Balthasar
      Gerards? Een rinkelende tram langs de Poptahof? De gierende wind rond de
      faculteit EWI op de TU Delft campus?
    </Paragraph>
    <Paragraph>
      Dat vroegen wij aan alle inwoners van Delft. En wat kregen wij een input!
      Van de geur van de gistfabriek, tot aangeschoten studenten en ook mag de
      Taptoe niet ontbreken volgens jullie. Wij sturen alle ideeën door naar de
      componist, Kevin Houben. Hij zal ermee aan de slag gaan, en natuurlijk
      zijn wij heel benieuwd naar hoe hij deze Delftse thema's weet te vertalen
      naar muziek.
    </Paragraph>
    <Title title="De componist Kevin Houben" />
    <Paragraph rightImage={KevinAndThijs}>
      De internationaal toonaangevende componist Kevin Houben gaat de compositie
      schrijven. Zijn eerste 'stadssymfonie' voor de stad Peer (België) is
      afgelopen juni met groot succes ook in Parijs uitgevoerd, na een
      wereldpremière in 2017 door het nationale symfonieorkest van België.
      Daarnaast zijn stukken van zijn hand uitgevoerd tijdens het dancefestival
      Tomorrowland, maar ook tijdens het grootste wereldmuziekfestival WMC in
      Kerkrade. Juist de combinatie van symfonische en moderne klanken maakt hem
      tot de perfecte componist voor het Delftse stuk.
    </Paragraph>
    <Paragraph>
      Benieuwd naar het eindresultaat? Op{' '}
      <Link to="/delftse-meesters-11-mei">11 mei</Link> brengen wij de{' '}
      wereldpremière van de compositie ten gehore in de Nieuwe Kerk en op{' '}
      <Link to="/muziek-festival-25-mei">25 mei</Link> de publiekspremière
      (gratis) tijdens een muziekfestival.
    </Paragraph>
  </Page>
);

export default Contact;
