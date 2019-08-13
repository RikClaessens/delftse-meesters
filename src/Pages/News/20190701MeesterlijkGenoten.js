import React from 'react';
import ReactPlayer from 'react-player';

import Page from '../Page';
import {
  Title,
  ImageRow,
  Paragraph,
  Link,
  PhotosPremiere,
} from '../../components';
import HeaderImage from '../../assets/images/MeesterlijkGenoten.jpg';
import Wethouder from '../../assets/images/LuxFuturaWethouder.jpg';
import MoodBoard from '../../assets/images/moodboard.png';
import WinnaarMaestro from '../../assets/images/WinnaarMaestro.jpg';
import ConcertFestivalOpDeMarkt from '../../assets/images/ConcertFestivalOpDeMarkt.jpg';

const NewsItem = () => {
  return (
    <Page title="Meesterlijk Genoten" headerImage={HeaderImage}>
      <Paragraph>
        Het Delftse meesters project is voorbij gevlogen. We kijken met veel
        plezier en tevredenheid terug op dit project, dat bestond uit 3
        evenementen; de wereldpremière van het speciaal voor ons en Delft
        gecomponeerde stuk Lux Futura, een concertfestival en een Delftse
        Maestro editie. Het geheel vond plaats in en om de Nieuwe Kerk. Dit is
        hoe we ons graag laten zien en horen in Delft en aan onze fans!
        Muzikaal, duidelijk Delfts en met een strakke organisatie. Hopelijk heb
        jij als vriend ook van een van de evenementen genoten.
      </Paragraph>

      <ImageRow
        images={[
          {
            src: Wethouder,
            alt: 'Lux Future en Wethouder Bas Vollebregt',
            style: { width: '90%', maxWidth: 600 },
          },
        ]}
      />

      <Paragraph>
        Delftse meesters, want we hebben in de muziek en de optredens het
        themajaar ‘De Gouden Eeuw' centraal gezet en daarmee de meesters uit het
        verleden, het heden en de toekomst. Ook de promotie van de stad Delft
        had daarmee een prominente plek. Volgens onze burgemeester Marja van
        Bijsterveldt: “Een geweldig evenement in het Delftse Gouden Eeuw-jaar.
        Delftse Meesters waren er altijd en ze zijn er nog steeds! Ik kan me een
        leven zonder muziek niet voorstellen. Ik kan enorm genieten van
        klassieke muziek. En het is ook heerlijk om zoveel muziek in onze
        prachtige Nieuwe Kerk te horen.”
      </Paragraph>

      <Title title="Muziekstuk voor en door Delft" />
      <Paragraph rightImage={MoodBoard}>
        De première van het voor ons gecomponeerde stuk door Kevin Houben op 11
        mei was een spannend moment voor ons als orkest, maar uiteraard ook voor
        Kevin zelf en onze dirigent. Vindt het publiek het wel mooi en hoe pakt
        de interpretatie van onze dirigent Erik Janssen uit? Het muziekstuk zelf
        – Lux Futura – bevat een zweem uit het verleden en een blik op de
        toekomst. Uit de reacties van het publiek die we kregen na afloop blijkt
        dat de veelzijdigheid van Delft zichtbaar en hoorbaar is. Nooit eerder
        is er een werk geschreven speciaal voor Delft en over Delft en met
        inbreng van Delftenaren! Wethouder van Cultuur Bas Vollebregt nam de
        partituur officieel in ontvangst. Voorzien van een Delfts stempel gaat
        het stuk nu de wereld in. Hoe cool zou het zijn als we Lux Futura terug
        horen bij de opening van de nieuwe Sebastiaansbrug of de nieuwe
        lancering van een nieuwe TU Delft zonneboot bijvoorbeeld!
      </Paragraph>

      <Title title="Concertfestival op de Markt" />
      <Paragraph leftImage={ConcertFestivalOpDeMarkt}>
        Zaterdagmiddag 25 mei was het tijd voor het Delftse Meesters
        concertfestival. Met een in het begin aarzelend zonnetje, dat later echt
        doorbrak was het flink genieten op de Markt. Onze eigen Kleine Harmonie,
        Alder Valley Brass, Big Band Delft Blue en twee van onze ensembles
        (Octopus en Work in Progress) speelden zonder onderbreking door. De
        banken zaten vol en tot 3 rijen dik stonden ze daarachter nog te
        luisteren. Heerlijk!
      </Paragraph>

      <Title title="De eerste Delftse Maestro is Gabriëlle Ponjee!" />
      <Paragraph rightImage={WinnaarMaestro}>
        In de avond op 25 mei was het een ultieme Delftse avond met de eerste
        Delftse editie van het bekende televisieprogramma Maestro. Ook speelden
        we nogmaals Lux Futura. Drie prominente Delftenaren beklommen de bok:{' '}
        <Link to="https://youtu.be/pYAH_UvZdwU">
          Tim van der Hagen – Rector Magnificus van de TU Delft;
        </Link>{' '}
        <Link to="https://youtu.be/rVY4vQpnXwk">
          Astrid Dijksman – Stadsprinses Astrid de 1e Kabbelaar de 43e;
        </Link>{' '}
        en{' '}
        <Link to="https://youtu.be/xwXeYD7m9iA">
          Gabriëlle Ponjee - Klinisch Chemicus Haaglanden Medisch Centrum
        </Link>
        . De aspirant Maestro’s moesten alles uit de kast halen om het speciaal
        voor de gelegenheid samengestelde en aangeklede Delftse Meesters orkest
        zo mooi mogelijk te laten klinken. Met de zeer deskundige begeleiding
        van coach Bas Pollard zetten de maestro’s een indrukwekkende prestatie
        neer. Dirigeren kun je leren, maar is zeker niet makkelijk… Uiteindelijk
        koos de jury, bestaande uit burgemeester Marja van Bijsterveldt, MOJO
        oprichter Berry Visser en onze eigen dirigent Erik Janssen om de
        allereerste Maestro-titel toe te kennen aan Gabriëlle Ponjee vanwege
        haar vermogen om zich volledig in te leven in de muziek en haar eigen
        interpretatie aan het stuk Time to say Goodbye te geven. Geniet net als
        wij nog even na met de{' '}
        <Link to="https://youtu.be/HhLDgDdOMmQ">aftermovie</Link> (mede mogelijk
        gemaakt door Captains)!
      </Paragraph>

      <Paragraph center={true}>
        <ReactPlayer url="https://youtu.be/HhLDgDdOMmQ" />
      </Paragraph>

      <Title title="Foto's Delftse Meesters Concerten" />
      <PhotosPremiere />
    </Page>
  );
};

export default NewsItem;
