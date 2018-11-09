import React from 'react';

const ImageRow = ({ images = [] }) => (
  <div style={styles.container}>
    {images.map(imageProps => (
      <div style={styles.imageContainer}>
        {/* eslint-disable-next-line */}
        <img style={styles.image} {...imageProps} />
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  image: {
    width: '100%',
    maxWidth: 300,
  },
};
export default ImageRow;
