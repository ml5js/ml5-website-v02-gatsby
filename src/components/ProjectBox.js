import React from "react";

const ProjectBox = ({ title, description, width, bgColor }) => {
  const colorPalette = [
    "#EEFF33",
    "#15F5BA",
    "#AA99FF",
    "#A6F6FF"
  ];
  const getColor = () => {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
  };

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: width || "18.8rem",
      height: "12rem",
      backgroundColor: bgColor || getColor(),
      margin: "0.7rem",
      padding: "0.5rem",
      borderRadius: "0.7rem",
    },
    title: {
      textAlign: "center",
    },
    description: {
      textAlign: "center",
    }
  };
  return (
    <div style={styles.container}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

export default ProjectBox;