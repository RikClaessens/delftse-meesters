import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { Link, Paragraph } from '../components';
import TicketSaleImg from '../assets/images/ticket-sale.png';

const TicketSale = () => (
  <>
    <Paragraph>
      <Link
        to="/kaartverkoop-delftse-meesters"
        style={{
          display: 'flex',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'center',
        }}
      >
        <img
          src={TicketSaleImg}
          alt="Kaartverkoop"
          style={{ maxWidth: '50%' }}
        />
      </Link>
    </Paragraph>
    <Paragraph>
      De kaartverkoop van de wereldpremière van de{' '}
      <b>
        <Link to="/wereldpremière-11-mei">Lux Futura</Link>
      </b>{' '}
      is gestart! Verzeker jezelf nu van kaarten en tot ziens op{' '}
      <Link to="/wereldpremière-11-mei">11 mei</Link>!
    </Paragraph>
    <Paragraph>
      <Link to="/kaartverkoop-delftse-meesters" style={{ fontSize: 32 }}>
        Ga naar de kaartverkoop <FaArrowRight />
      </Link>
    </Paragraph>
  </>
);

export default TicketSale;
