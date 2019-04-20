import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import InstagramEmbed from 'react-instagram-embed';

import { Link, Paragraph, Title } from '../components';
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
    <Title title="Win Kaarten!" />
    <Paragraph
      style={{
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <InstagramEmbed
        url="https://www.instagram.com/p/BwcmuGmHRQm/"
        hideCaption={false}
        containerTagName="div"
        protocol=""
        injectScript
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
        style={{ maxWidth: 500, display: 'flex', flex: 1 }}
      />
    </Paragraph>
  </>
);

export default TicketSale;
