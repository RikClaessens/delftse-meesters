import React from 'react';

import Page from '../Page';
import { Link, Paragraph, HighlightText } from '../../components';
import HeaderImage from '../../assets/images/KapelNieuweKerkDelft-19.jpg';
import CTAImage from '../../assets/images/bedrijfsarrangementen.png';

const NewsItem = () => {
  return (
    <Page title="Bedrijfsarrangementen 11 mei" headerImage={HeaderImage}>
      <HighlightText text="Bedrijfsarrangement tijdens de gala-wereldpremière van Lux Futura 11 mei" />
      <Paragraph>
        Bent u nog op zoek naar een leuke activiteit voor uw
        personeelsvereniging of zoekt u een mooie gelegenheid voor een
        onvergetelijke relatieavond met uw zakenpartners? Maak dan gebruikt van
        ons bedrijfsarrangement tijdens de gala-wereldpremière van onze
        compositie Lux Futura op 11 mei.
      </Paragraph>

      <Paragraph style={{ justifyContent: 'center', display: 'flex' }}>
        <Paragraph leftImage={CTAImage} style={{ maxWidth: 600 }} />
      </Paragraph>
      <Paragraph>
        Deze avond leent zich bij uitstek voor een relatieavond met uw
        zakenpartners en/of medewerkers. Het bedrijfsarrangement bestaat uit een
        speciale ontvangst - door een van de prominenten uit de Gouden Eeuw,
        denk aan Johannes Vermeer of Het Meisje met de Parel - met drankje in
        een besloten gedeelte van de Nieuwe Kerk waar u na afloop van het
        concert weer opnieuw terecht kunt. Daarnaast zit u zit samen met uw
        gasten op speciaal gereserveerde plaatsen.
      </Paragraph>
      <Paragraph>
        U kunt uw avond compleet maken door vooraf te dineren in een van de
        restaurants aan de Markt in Delft. Voor een bedrijfsarrangement dient u
        van tevoren meerdere tickets aan te schaffen, u betaalt hiervoor een
        speciaal tarief. Voor meer informatie en het bestellen van tickets, kunt
        u mailen naar
        <Link
          to={`mailto:delftsemeesters@harmoniedelft.nl?subject=Bedrijfsarrangement 11 mei!`}
        >
          delftsemeesters@harmoniedelft.nl
        </Link>
      </Paragraph>
    </Page>
  );
};

export default NewsItem;
