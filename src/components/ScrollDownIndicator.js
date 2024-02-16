import React from "react";

const ScrollDownIndicator = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      border: 'solid black',
      borderWidth: '0 3px 3px 0',
      display: 'inline-block',
      padding: '6px',
      transform: 'rotate(45deg)',
      animation: 'blink 2s infinite',
      animationTimingFunction: 'ease-in-out',
    },
  };
  return (
    <>
      <div style={styles.container}>
        <div style={styles.arrow}></div>
      </div>
    </>
  );
};

export default ScrollDownIndicator;