import React, { useState, useEffect } from 'react';

const IframeBgComponent = (style) => {
  const [iframeSrc, setIframeSrc] = useState('');
  const styles = {
    container: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      opacity: 0.4,
      overflow: "hidden",
      zIndex: -1,
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

export default IframeBgComponent;