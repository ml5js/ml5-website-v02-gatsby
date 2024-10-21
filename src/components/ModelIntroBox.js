import React from "react";

const ModelIntroBox = ({ title, description, width, bgColor, imageURL, linkURL }) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      width: width || "18.0rem",
      height: "12.5rem",
      backgroundColor: imageURL ? "transparent" : (bgColor || "#f0f0f0"),
      backgroundImage: imageURL ? `url(${imageURL})` : "none",
      backgroundSize: "40%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "top center",
      margin: "1.2rem 0.7rem",
      padding: "0.5rem",
      borderRadius: "0.7rem",
      textAlign: "center",
      transition: "color 0.3s ease-in-out",
      cursor: linkURL ? "pointer" : "default",
      color: "var(--color-text)",
    },
    containerHover: {
      color: "var(--color-primary)",
    },
    title: {
      // marginBottom: "0.5rem",
    },
    description: {
      margin: "0",
    },
  };
  return (
    <a href={linkURL || "#"} style={styles.link} target="_self">
      <div style={styles.container} onMouseEnter={(e) => {
        e.currentTarget.style.color = styles.containerHover.color;
      }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = styles.container.color;
        }}
      >
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>
      </div>
    </a >
  );
};

export default ModelIntroBox;