import React from "react";

const TextBox = ({ title, content, maxWidth, bgColor, headingLevel, customStyle }) => {
  const defaultStyle = {
    container: {
      borderRadius: "1rem",
      maxWidth: maxWidth || "100%",
      margin: "0 auto 1.5rem auto",
      backgroundColor: bgColor || "transparent",
    },
    title: {
      margin: "0 0 0.7rem 0",
      color: "var(--color-tertiary)"
    },
    content: {
      color: "var(--color-text-dark)",
      fontSize: "1.2rem",
    },
    paragraph: {
      // textAlign: "justify",
    }
  };

  const styles = { ...defaultStyle, ...customStyle };

  const Heading = `h${Math.min(Math.max(headingLevel, 1), 6)}`;

  const renderContent = () => {
    if (!content) return null;
    const paragraphs = Array.isArray(content) ? content : content.split('\n');
    return paragraphs.map((paragraph, index) => (
      <p key={index} style={styles.paragraph}>{paragraph}</p>
    ));
  };

  return (
    <div style={styles.container}>
      {title && <Heading style={styles.title}>{title}</Heading>}
      <div style={styles.content}>
        {renderContent()}
      </div>
    </div>
  );
};

export default TextBox;
