import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../theme';

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-bottom: 12px;
  flex-direction: column;
  @media ${mediaQueries.laptopL} {
    flex-direction: row;
  }
`;

const Paragraph = ({ text, style, leftImage, rightImage }) => (
  <StyledDiv style={styles.container}>
    {leftImage && (
      <div style={{ flex: 1 }}>
        <img
          src={leftImage}
          style={{ ...styles.image, ...styles.leftImage }}
          alt=""
        />
      </div>
    )}
    <div style={{ flex: 1 }}>
      <div style={{ ...styles.text, ...style }}>{text}</div>
    </div>
    {rightImage && (
      <div style={{ flex: 1 }}>
        <img
          src={rightImage}
          style={{ ...styles.image, ...styles.rightImage }}
          alt=""
        />
      </div>
    )}
  </StyledDiv>
);

const styles = {
  container: {},
  image: {
    objectFit: 'contain',
    width: 'calc(100% - 16px)',
    padding: 8,
    paddingBottom: 16,
  },
  text: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'justify',
  },
};
export default Paragraph;
