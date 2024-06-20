import React from "react";

const ProjectBox = ({ title, description, width, imageURL, bgColor }) => {
  const colorPalette = [
    "#f8f9fb",
    "#f8f9fb",
    "#f8f9fb",
    "#f8f9fb"
  ];
  const getColor = () => {
    const randomIndex = Math.floor(Math.random() * colorPalette.length);
    return colorPalette[randomIndex];
  };
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      // place at the bottom of the container
      justifyContent: "flex-end", // "flex-end
      alignItems: "center",
      width: width || "18.8rem",
      height: "12rem",
      // backgroundColor: imageURL ? "transparent" : (bgColor || getColor()),
      // backgroundColor: "#f8f9fb",
      backgroundImage: imageURL ? `url(${imageURL})` : "none",
      backgroundSize: "40%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      margin: "1.2rem 0.7rem",
      padding: "0.5rem",
      borderRadius: "0.7rem",
      textAlign: "center",
    },
    title: {
      // marginBottom: "0.5rem",
    },
    description: {
      margin: "0",
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