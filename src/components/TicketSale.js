import React from 'react';

import { Link } from '../components';
import EarlyBirdTickets from '../assets/images/ticket-sale.png';

const TicketSale = () => (
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
      src={EarlyBirdTickets}
      alt="Kaartverkoop"
      style={{ maxWidth: '50%' }}
    />
  </Link>
);

export default TicketSale;
