import React from 'react';

import Page from '../Page';
import { Link, Paragraph, ImageRow } from '../../components';
import HeaderImage from '../../assets/images/sheet-music.jpg';
import MaestroBanner from '../../assets/images/maestro-banner.png';

const Contact = () => {
  const mailBody =
    'Ik geef me graag op als Delftse Meester!\n\nNaam:\nLeeftijd:\nWaarom wil je graag meedoen?\nWat beteken jij voor de stad Delft?\nTelefoonnummer:\nEmail-adres:\n';
  return (
    <Page title="Word jij de Delftse Meester?" headerImage={HeaderImage}>
      <iframe
        width="90%"
        height="315"
        src="https://www.youtube.com/embed/BAt7ttpvwsk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        title="Word jij de Delftse Meester?"
        style={{ margin: 32 }}
      />
      <Paragraph>
        Het bekende televisieprogramma Maestro krijgt een heuse Delftse Editie
        met alle toeters en bellen die daarbij horen. De Koninklijke
        Harmoniekapel Delft organiseert op 25 mei een grootse Maestro finale in
        de Nieuwe Kerk waarin enkele bekende en minder bekende Delftenaren het
        dirigeerstokje overnemen van onze dirigent Erik Janssen om een
        fantastische én verrassende avond neer te zetten. Spannend wordt het
        zeker, want wie wordt de allereerste Delftse Maestro?
      </Paragraph>
      <Paragraph>
        Misschien is deze titel wel voor jou weggelegd! Wieg jij altijd onbewust
        mee met de muziek? Ga je ook altijd helemaal op in de muziek als je een
        prachtig nummer hoort? Je zult alles uit de kast moeten halen om het
        speciaal voor deze gelegenheid samengestelde en aangeklede Delftse
        Meester orkest zo mooi mogelijk te laten klinken. En wie weet word jij
        dan de Delftse Meester.
      </Paragraph>
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
        Schrijf je dan nu snel in voor 28 februari! Hoe? Stuur een mail naar{' '}
        <Link
          to={`mailto:delftsemeesters@harmoniedelft.nl?subject=Ik word graag een Delftse Maestro!&body=${encodeURIComponent(
            mailBody
          )}`}
        >
          delftsemeesters@harmoniedelft.nl
        </Link>{' '}
        met daarin de volgende gegevens:
        <ul>
          <li>Naam</li>
          <li>Leeftijd</li>
          <li>Waarom moet juist jij meedoen aan de Delftse Maestro?</li>
          <li>Wat heb jij met de stad Delft?</li>
        </ul>
        Vergeet niet je telefoonnummer en emailadres te vermelden en wie weet
        zien we jou wel schitteren tijdens de Maestro finale op 25 mei!
      </Paragraph>
    </Page>
  );
};

export default Contact;
