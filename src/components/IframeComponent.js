import React, { useState, useEffect } from 'react';

const IframeComponent = () => {
  const [iframeSrc, setIframeSrc] = useState('');
  const styles = {
    container: {
      width: "100%",
      height: "22rem",
	  display: "flex",
      justifyContent: "center", // Center iframe horizontally
      alignItems: "center", // Center iframe vertically
      overflow: "hidden",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
  };

  useEffect(() => {
    setIframeSrc('https://moqn.github.io/ml5-website-hero/sketch/?reload=true'); // Set your iframe URL here
  }, []); // Empty dependency array to ensure this runs only once on mount

  return (
    <div style={styles.container}>
      <iframe
        src={iframeSrc}
        title="Hero Sketch"
        style={styles.iframe}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeComponent;