import React from 'react';

const Paragraph = ({ text, style, leftImage, rightImage }) => (
  <div style={styles.container}>
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
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  image: {
    objectFit: 'contain',
    width: 'calc(100% - 16px)',
    paddingLeft: 8,
    paddingRight: 8,
  },
  text: {
    flex: 1,
    paddingLeft: 16,
    paddingRight: 16,
    textAlign: 'justify',
  },
};
export default Paragraph;
