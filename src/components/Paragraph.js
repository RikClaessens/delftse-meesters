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

const CenteredDiv = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Paragraph = ({ children, style, leftImage, rightImage, imageStyle }) => (
  <StyledDiv style={style}>
    {leftImage && (
      <CenteredDiv>
        <img
          src={leftImage}
          style={{ ...styles.image, ...styles.leftImage, ...imageStyle }}
          alt=""
        />
      </CenteredDiv>
    )}
    <div style={{ flex: children ? 1 : 0, width: children ? '100%' : 'auto' }}>
      <div style={{ ...styles.text, ...style }}>{children}</div>
    </div>
    {rightImage && (
      <CenteredDiv>
        <img
          src={rightImage}
          style={{ ...styles.image, ...styles.rightImage, ...imageStyle }}
          alt=""
        />
      </CenteredDiv>
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
