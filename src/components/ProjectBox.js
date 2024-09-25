import React from "react";

const ProjectBox = ({
  title,
  author,
  description,
  width,
  bgColor,
  imageURL,
  linkURL,
  tags,
}) => {
  // styles and methods for the tags
  const tagColors = {
    BodyPose: "#FFCCBB",
    BodySegmentation: "#FFDFBA",
    HandPose: "#FFFFBA",
    FaceMesh: "#BAFFC9",
    ImageClassifier: "#BAE1FF",
    SoundClassifier: "#E6E6FA",
    Sentiment: "#FFD1DC",
    NeuralNetwork: "#FFB347",
    TeachableMachine: "#99E9EE",
    Other: "#EEE",
  };
  const urlExceptions = ["BodyPose", "HandPose", "FaceMesh"];
  const changeUpperCamelToKebabCase = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2") // insert hyphen between lower and upper case letters
      .toLowerCase();
  };
  const getTagURL = (tag) => {
    // THIS IS A TEMPORARY FIX
    let modelName = "";
    if (urlExceptions.includes(tag)) {
      // if the tag is an exception, change it to lower case and return the tag itself
      modelName = tag.toLowerCase();
    } else {
      // if not, change the tag to kebab case and return the URL
      modelName = changeUpperCamelToKebabCase(tag);
    }
    return `https://docs.ml5js.org/#/reference/${modelName}`;
  };
  // styles for the component
  const styles = {
    container: {
      width: width || "30.5rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
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
      borderRadius: "4px",
      padding: "0.3rem 0.5rem",
      marginRight: "0.5rem",
      marginBottom: "0.5rem",
      fontSize: "0.75rem",
      color: "var(--color-text)",
    },
    link: {
      textDecoration: "none",
      color: "inherit",
    },
  };
  return (
    <div style={styles.container}>
      {imageURL && <img src={imageURL} alt={title} style={styles.image} />}
      <div style={styles.content}>
        <a
          href={linkURL || "#"}
          style={styles.link}
          target={linkURL ? "_blank" : "_self"}
          rel={linkURL ? "noopener noreferrer" : ""}
        >
          <div style={styles.header}>
            <h3 style={styles.title}>{title}</h3>
            <h3 style={styles.author}>{author}</h3>
          </div>
          <p style={styles.description}>{description}</p>
        </a>
        <div style={styles.tagsContainer}>
          {tags &&
            tags.slice(0, 4).map((tag, index) => (
              <a
                href={getTagURL(tag)}
                key={index}
                style={{
                  ...styles.tag,
                  backgroundColor: tagColors[tag] || tagColors["Other"],
                }}
              >
                #{tag}
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
