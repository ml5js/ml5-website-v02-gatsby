import React from "react";
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const TextQuoted = ({ content, customStyle }) => {
  const defaultStyle = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '1rem',
    },
    content: {
      color: "var(--color-text-dark)",
      zIndex: 10,
    },
    imageLeft: {
      marginRight: '-1.8rem',
      marginBottom: '1rem',
      width: '4.5rem',
    },
    imageRight: {
      marginLeft: '-1.8rem',
      marginTop: '1rem',
      width: '4.5rem',
    },
  };

  const styles = { ...defaultStyle, ...customStyle };

  return (
    <div style={styles.container}>
      <img src="images/quote-left.png" alt="Left" style={styles.imageLeft} />
      <div style={styles.content}>
        <h2>{content}</h2>
      </div>
      <img src="images/quote-right.png" alt="Right" style={styles.imageRight} />
    </div>
  );
};

export default TextQuoted;
