import React from 'react';
import styled from 'styled-components';

import { mediaQueries } from '../theme';

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  @media ${mediaQueries.laptop} {
    flex-direction: row;
  }
`;

const ImageRow = ({ images = [] }) => (
  <StyledDiv>
    {images.map(imageProps => (
      <div style={styles.imageContainer}>
        {/* eslint-disable-next-line */}
        <img style={styles.image} {...imageProps} />
      </div>
    ))}
  </StyledDiv>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    marginTop: 16,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    marginTop: 32,
    marginBottom: 32,
  },
  image: {
    width: '100%',
    maxWidth: 300,
  },
};
export default ImageRow;
