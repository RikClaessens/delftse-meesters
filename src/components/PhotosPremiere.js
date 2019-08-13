import React from 'react';

import { NewsRow } from '.';

const items = [
  {
    title: "Foto's Wereldpremière Lux Futura",
    link: 'https://photos.app.goo.gl/eBfwAfeVXoAGXFwE7',
    image: 'premiere-LuxFutura.jpg',
  },
  {
    title: "Foto's Concertfestival & Maestro Finale",
    link: 'https://photos.app.goo.gl/eFihZu9mA85WzHLt5',
    image: 'concertfestivalenmaestro.jpg',
  },
];

const PhotosPremiere = () => <NewsRow items={items} />;

export default PhotosPremiere;
