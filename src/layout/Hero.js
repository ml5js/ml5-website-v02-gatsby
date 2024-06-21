import React from "react";
import Button from "../components/Button";
import Spacer from "../components/Spacer";

const Hero = ({ title, subtitle, image }) => {
  const styles = {
    container: {
      // backgroundImage: `url(${image})`,
      // backgroundColor: "#CCFFFF",
      // backgroundSize: "cover",
      // backgroundPosition: "center",
      // backgroundRepeat: "no-repeat",
      height: "calc(100vh - 10.5rem)",
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    content: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
    }
  }
  return (
    <section style={styles.container}>
      <div>
        <h1 style={styles.content}>{title}</h1>
        <p style={styles.content}>{subtitle}</p>
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