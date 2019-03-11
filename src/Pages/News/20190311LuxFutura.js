import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import Page from '../Page';
import { Link, Paragraph } from '../../components';
import HeaderImage from '../../assets/images/kapel-nieuwe-kerk-2.jpg';
import MoodBoard from '../../assets/images/moodboard.png';

const NewsItem = () => {
  return (
    <Page
      title="Ons muziekstuk heeft een naam: Lux Futura!"
      headerImage={HeaderImage}
    >
      <Paragraph>
        De compositie Lux Futura gaat over de Delftse Meesters van licht, denk
        aan de grootste schilders van de 16e eeuw zoals Pieter de Hooch en
        Johannes Vermeer tot aan de grootste Delftse ontdekkingen van nu!
        Componist Kevin Houben heeft als terugkerend thema de naam van Delft op
        muziek gezet door elke letter een noot toe te kennen en deze in
        verschillende muzikale variaties terug te laten komen. Maar dat is niet
        het enigste!
      </Paragraph>

      <Paragraph style={{ justifyContent: 'center', display: 'flex' }}>
        <Paragraph leftImage={MoodBoard} style={{ maxWidth: 600 }} />
      </Paragraph>
      <Paragraph>
        De inwoners van Delft mochten ook meedenken wat er niet mocht ontbreken
        in een muziekstuk voor en over Delft! Er zijn veel ideeën ingestuurd
        zoals de fietsen in Delft tot aan het klinken van de paardenhoeven en
        natuurlijk mogen de studenten ook niet ontbreken! Als je graag wilt
        weten welke van onderstaande inzendingen allemaal meegenomen zijn in de
        compositie, kom dan naar de wereldpremière van Lux Futura op 11 mei in
        de Nieuwe Kerk. Dus luister hoe Delft op muziek klinkt!
      </Paragraph>
      <Paragraph>
        <Link to="/kaartverkoop-delftse-meesters" style={{ fontSize: 32 }}>
          Ga naar de kaartverkoop <FaArrowRight />
        </Link>
      </Paragraph>
    </Page>
  );
};

export default NewsItem;
