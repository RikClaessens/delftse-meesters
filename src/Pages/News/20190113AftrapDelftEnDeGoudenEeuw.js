import React from 'react';

import Page from '../Page';
import { Link, Paragraph } from '../../components';
import HeaderImage from '../../assets/images/octopus-gouden-eeuw.jpg';
import OctopusNieuwjaarsReceptie from '../../assets/images/octopus-nieuwjaars-receptie.jpg';
import OctopusOptreden from '../../assets/images/octopus-optreden.jpg';

const NewsItem = () => (
  <Page title="Aftrap Delft en de Gouden Eeuw" headerImage={HeaderImage}>
    <Paragraph>
      Afgelopen weekend trad Octopus - een van onze ensembles - op tijdens de
      Nieuwjaarsreceptie van de gemeente Delft. Burgemeester Van Bijsterveldt
      trapte hier het themajaar ‘Delft en de Gouden Eeuw’ af. In haar
      nieuwjaarstoespraak blikte zij vooruit op de mooie plannen die door
      gemeente, ondernemers en het culturele leven van Delft voor komend jaar op
      stapel staan.
    </Paragraph>
    <Paragraph>
      In 17e eeuwse kleding speelde Octopus werken van componisten uit de Gouden
      Eeuw. Zo gaven onze muzikanten een voorproefje van wat ons in mei te
      wachten staat.
    </Paragraph>
    <Paragraph
      leftImage={OctopusOptreden}
      rightImage={OctopusNieuwjaarsReceptie}
    />
    <Paragraph>
      Op <Link to="/wereldpremière-11-mei">11 mei</Link> vindt in de Nieuwe Kerk
      in Delft de galapremiere plaats van de nieuwe Delftse compositie die op
      dit moment wordt geschreven door componist Keven Houben, werktitel
      ‘Delftse Meesters’. Kaarten zijn binnenkort verkrijgbaar via deze website.
    </Paragraph>
  </Page>
);

export default NewsItem;
