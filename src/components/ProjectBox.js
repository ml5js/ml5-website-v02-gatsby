import React from "react";

const ProjectBox = ({ title, author, description, width, bgColor, imageURL, linkURL, tags }) => {
  const styles = {
    container: {
      width: width || "30.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      // color: "var(--color-text)",
      textAlign: "left",
      transition: "color 0.3s ease-in-out",
      cursor: linkURL ? "pointer" : "default",
    },
    image: {
      width: "100%",
      borderRadius: "var(--border-radius)",
    },
    content: {
      // padding: "0.5rem",
    },
    header: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "baseline",
      width: "100%",
      marginTop: "1rem",
      gap: "1rem",
    },
    title: {
      fontSize: "1.25rem",
    },
    author: {
      fontSize: "1rem",
      color: "var(--color-text-light)",
    },
    description: {
      margin: "0.3rem 0",
    },
    tagsContainer: {
      display: "flex",
      flexWrap: "wrap",
      marginTop: "0.5rem",
    },
    tag: {
      backgroundColor: "#e0e0e0",
      borderRadius: "4px",
      padding: "0.3rem 0.5rem",
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
      fontSize: "0.75rem",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    }
  };
  return (
    <a href={linkURL || "#"} style={styles.link} target={linkURL ? "_blank" : "_self"} rel={linkURL ? "noopener noreferrer" : ""}>
      <div style={styles.container}>
        {imageURL && <img src={imageURL} alt={title} style={styles.image} />}
        <div style={styles.content}>
          <div style={styles.header}>
            <h3 style={styles.title}>{title}</h3>
            <h3 style={styles.author}>{author}</h3>
          </div>
          <p style={styles.description}>{description}</p>
          <div style={styles.tagsContainer}>
            {tags && tags.slice(0, 4).map((tag, index) => (
              <div key={index} style={styles.tag}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;