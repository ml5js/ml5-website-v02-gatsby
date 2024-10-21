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
  // Define tag colors and exceptions for URLs
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
    Other: "#EEE", // Default for "Other" tags
  };

  const urlExceptions = ["BodyPose", "HandPose", "FaceMesh"];

  // Function to convert UpperCamelCase to kebab-case
  const changeUpperCamelToKebabCase = (str) => {
    return str
      .replace(/([a-z])([A-Z])/g, "$1-$2") // Insert hyphen between lower and upper case letters
      .toLowerCase();
  };

  // Get the URL for the tag based on the name
  const getTagURL = (tag) => {
    let modelName = "";
    if (urlExceptions.includes(tag)) {
      modelName = tag.toLowerCase(); // Exceptions use lowercase without kebab case
    } else {
      modelName = changeUpperCamelToKebabCase(tag); // Convert to kebab case
    }
    return `https://docs.ml5js.org/#/reference/${modelName}`;
  };

  // Styles for the component
  const styles = {
    container: {
      width: width || "19.9rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      textAlign: "left",
      transition: "color 0.3s ease-in-out",
      cursor: linkURL ? "pointer" : "default",
      lineHeight: "1.5",
    },
    image: {
      width: "100%",
      borderRadius: "var(--border-radius)",
    },
    content: {},
    header: {
      width: "100%",
      margin: "1rem 0",
      gap: "1rem",
    },
    title: {
      fontSize: "1.0rem",
      marginBottom: "0.5rem",
    },
    author: {
      fontSize: "0.9rem",
      color: "var(--color-text-light)",
    },
    description: {
      margin: "0.3rem 0",
      fontSize: "0.9rem",
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
    <a
      href={linkURL || "#"}
      style={styles.link}
      target={linkURL ? "_blank" : "_self"}
      rel={linkURL ? "noopener noreferrer" : ""}
    >
      <div style={styles.container}>
        {imageURL && <img src={imageURL} alt={title} style={styles.image} />}
        <div style={styles.content}>
          <div style={styles.header}>
            <h3 style={styles.title}>{title}</h3>
            <h3 style={styles.author}>{author}</h3>
          </div>
          <p style={styles.description}>{description}</p>
        </div>
        <div style={styles.tagsContainer}>
          {tags &&
            tags.slice(0, 4).map((tag, index) => (
              tagColors[tag] ? ( // Only create a link if the tag exists in tagColors
                <a
                  href={getTagURL(tag)}
                  key={index}
                  style={{
                    ...styles.tag,
                    backgroundColor: tagColors[tag],
                  }}
                >
                  #{tag}
                </a>
              ) : (
                <div
                  key={index}
                  style={{
                    ...styles.tag,
                    backgroundColor: tagColors["Other"], // Default color for non-link tags
                  }}
                >
                  #{tag}
                </div>
              )
            ))}
        </div>
      </div>
    </a>
  );
};

export default ProjectBox;
