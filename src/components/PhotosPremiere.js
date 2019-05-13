import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Link, Paragraph } from '.';
import MainImage from '../assets/images/premiere-LuxFutura.jpg';

const PhotosPremiere = () => (
  <>
    <Paragraph>
      <Link
        to="https://photos.app.goo.gl/eBfwAfeVXoAGXFwE7"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <img
          src={MainImage}
          alt="Foto's wereldpremière"
          style={{ maxWidth: '50%' }}
        />
      </Link>
    </Paragraph>
    <Paragraph>
      De foto's van de wereldpremière van de{' '}
      <b>
        <Link to="/wereldpremière-11-mei">Lux Futura</Link>
      </b>{' '}
      zijn nu te bekijken!
    </Paragraph>
    <Paragraph>
      <Link
        to="https://photos.app.goo.gl/eBfwAfeVXoAGXFwE7"
        style={{ fontSize: 32 }}
      >
        Ga naar de foto's <FaArrowRight />
      </Link>
    </Paragraph>
  </>
);

export default PhotosPremiere;
