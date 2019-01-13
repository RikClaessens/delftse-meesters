import React from 'react';
import styled from 'styled-components';

import BulletImage from '../assets/images/music-bullet.png';
import { colors, mediaQueries } from '../theme';

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

const Paragraph = ({ children, style, leftImage, rightImage }) => (
  <StyledDiv>
    {leftImage && (
      <div style={{ flex: 1 }}>
        <img
          src={leftImage}
          style={{ ...styles.image, ...styles.leftImage }}
          alt=""
        />
      </div>
    )}
    <div style={{ flex: children ? 1 : 0 }}>
      <div style={{ ...styles.text, ...style }}>{children}</div>
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
  image: {
    objectFit: 'contain',
    width: 'calc(100% - 16px)',
    padding: 16,
  },
  text: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 16,
    textAlign: 'justify',
    listStyleImage: `url(${BulletImage})`,
    color: colors.text,
  },
};
export default Paragraph;
