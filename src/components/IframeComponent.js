import React from 'react';

const IframeComponent = () => {
  const styles = {
    container: {
      width: "100%",
      height: "22rem",
      overflow: "hidden",
    },
    iframe: {
      width: "100%",
      height: "100%",
      border: "none",
    },
  };

  return (
    <div style={styles.container}>
      <iframe
        src="https://moqn.github.io/ml5-website-hero/sketch/"
        title="Hero Sketch"
        style={styles.iframe}
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default IframeComponent;