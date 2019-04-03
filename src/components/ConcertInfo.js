import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import styled from 'styled-components';

import { colors, fonts } from '../theme';
const StyledTD = styled.td`
  padding-right: 32px;
  font-size: 0.9em;
  color: ${colors.secondary};
  font-family: ${fonts.title};
`;

const StyledTDContent = styled.td`
  color: ${colors.secondary};
  font-family: ${fonts.title};
  border-left: 1px solid ${colors.gold};
  padding-left: 32px;
`;

const Row = ({ prop, title }) =>
  prop && (
    <tr>
      <StyledTD>{title}</StyledTD>
      <StyledTDContent>{prop}</StyledTDContent>
    </tr>
  );
const ConcertInfo = ({ location, address, time, date, price, image }) => (
  <Card>
    {image && <CardMedia image={image} style={{ height: 140 }} height="140" />}
    <CardContent>
      <table cellspacing="0">
        <tbody>
          <Row title="Locatie" prop={location} />
          <Row title="Adres" prop={address} />
          <Row title="Datum" prop={date} />
          <Row title="Tijd" prop={time} />
          <Row title="Prijs" prop={price} />
        </tbody>
      </table>
    </CardContent>
  </Card>
);

export default ConcertInfo;
