import React from 'react';

import { HighlightText, Paragraph } from '../../components';
import FrancisBroekhuijsen from '../../assets/images/maestro/francis-broekhuijsen.jpg';

const Francis = () => (
  <Paragraph rightImage={FrancisBroekhuijsen} imageStyle={{ width: '40%' }}>
    <HighlightText text="Francis Broekhuijsen" />
    Francis Broekhuijsen is een graag geziene presentator en moderator op
    diverse culturele festivals en podia. Hij studeerde in 1996 af als acteur
    aan de Toneelschool Amsterdam. Daarna werkte hij bij verschillende
    theatergezelschappen en hij maakte deel uit van het vaste ensemble van het
    Nationale Toneel. Na jaren van acteren heeft hij zich toegelegd op zijn
    talent voor taal, (soul, jazz en klassieke) muziek en (nieuwe) media. Hij
    was hoofdredacteur van Cultuurpodium.nl, presentator bij de Amsterdamse
    stadszender AT5.
    <br />
    <br />
    Zijn liefde voor alle soorten van muziek komt tot uiting in zijn werk als DJ
    en radiomaker waar hij te horen was op NPO Radio 1 en nu wekelijks op 40Up-
    en NH Radio en presenteerde hij de klassieke concertreeks in het
    Concertgebouw tijdens Robeco Summernights Live en jaarlijks het
    zondagochtendconcert op de Uitmarkt in Amsterdam.Als redacteur,
    programmamaker en presentator is hij verbonden aan het internationaal
    literatuurfestival Winternachten in Den Haag.
    <br />
    <br />
    In Delft is hij zeker geen onbekende: hij presenteert al een aantal jaar het
    Dille en Kamille Marktconcert op de Grote Markt tijdens het Delft Chamber
    Music Festival. Ook presenteerde hij Lichtjesavond afgelopen december en is
    hij vaste presentator en reporter tijdens het foodfestival Delft Serveert.
  </Paragraph>
);

export default Francis;
