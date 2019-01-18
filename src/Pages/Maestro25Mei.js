import React from 'react';

import Page from './Page';
import { HighlightText, ImageRow, Paragraph, Title, Link } from '../components';
import HeaderImage from '../assets/images/sheet-music.jpg';
import NieuweKerk from '../assets/images/nieuwe-kerk.jpg';
import GemeenteDelft from '../assets/images/partners/gemeente-delft.jpg';
import NieuweKerkLogo from '../assets/images/partners/nieuwe-kerk-logo.svg';
import Kapel from '../assets/images/kapel.jpg';
import SomethingExtraLogo from '../assets/images/partners/something-extra.png';
import MaestroBanner from '../assets/images/maestro-banner.png';

const Maestro25Mei = () => {
  const mailBody =
    'Ik geef me graag op als Delftse Meester!\n\nNaam:\nLeeftijd:\nWaarom wil je graag meedoen?\nWat beteken jij voor de stad Delft?\nTelefoonnummer:\nEmail-adres:\n';
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
        <ImageRow
          images={[
            {
              src: MaestroBanner,
              alt: 'Maestro',
              style: { maxWidth: '60%', marginBottom: 32 },
            },
          ]}
        />
        Word jij de Delftse Meester? Schrijf je nu in! Stuur een mail naar{' '}
        <Link
          to={`mailto:delftsemeesters@harmoniedelft.nl?subject=Ik word graag een Delftse Maestro!&body=${encodeURIComponent(
            mailBody
          )}`}
        >
          delftsemeesters@harmoniedelft.nl
        </Link>{' '}
        met daarin de volgende gegevens: je naam, leeftijd, waarom je graag mee
        zou willen doen en wat jij betekent voor de stad Delft. Vergeet niet je
        telefoonnummer en emailadres te vermelden en wie weet zien we jou wel
        schitteren tijdens de Maestro finale op 25 mei!
      </Paragraph>

      <Title title="Het orkest" />
      <Paragraph rightImage={Kapel}>
        <HighlightText text="Het Delftse Meester Orkest" />
        Speciaal voor deze gelegenheid wordt er een samengesteld Delftse Meester
        orkest gecreëerd, bestaande uit muzikanten van de Koninklijke
        Harmoniekapel én de Kleine Harmonie. Wat betekent dat de aspirant
        Maestro’s meer dan honderd muzikanten onder hun hoede krijgen.
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
