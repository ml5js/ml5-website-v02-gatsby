import React from "react";
import Button from "../components/Button";
import Spacer from "../components/Spacer";

const Hero = ({ title, subtitle }) => {
  const styles = {
    container: {
      height: "calc(100vh - 10.5rem)",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    title: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      fontSize: "2.5rem",
    },
    subtitle: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      fontSize: "1.2rem",
    }
  }
  return (
    <section style={styles.container}>
      <div>
        <h1 style={styles.title}>{title}</h1>
        <p style={styles.subtitle}>{subtitle}</p>
      </div>
      <Spacer
        height="0.5rem"
      />
      <Button
        children="Get Started"
        url="https://docs.ml5js.org/#/"
        fontSize="1.1rem"
        borderStyle="solid"
        padding="0.5rem 1.0rem"
        margin="1.5rem 0"
      />
    </section>
  );
};

export default Hero;