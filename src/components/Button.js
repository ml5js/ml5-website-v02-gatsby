import * as React from "react";
import PropTypes from "prop-types";

import {
  customButton,
  customA,
} from './Button.module.css'

import '/src/styles/global.css';

const Button = ({
  children, url, target, txtColor, bgColor, fontSize, borderStyle, padding, margin, letterSpacing, customStyle
}) => {
  const defaultStyle = {
    color: txtColor || "var(--color-primary)",
    backgroundColor: bgColor || "#ffffff",
    borderStyle: borderStyle || "none",
    fontSize: fontSize || "1.0rem",
    padding: padding || "0.18rem 0.4rem",
    margin: margin || "0 0.5rem",
    letterSpacing: letterSpacing || "-0.01rem",
  };

  const styles = { ...defaultStyle, ...customStyle };

  return (
    <button className={customButton} style={styles}>
      <a href={url} target={target || "_self"} className={customA}>{children}</a>
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  url: PropTypes.node.isRequired,
  txtColor: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  fontSize: PropTypes.string.isRequired,
  borderStyle: PropTypes.string.isRequired,
  padding: PropTypes.string.isRequired,
  margin: PropTypes.string.isRequired,
  // onClick: PropTypes.func,
};

export default Button;