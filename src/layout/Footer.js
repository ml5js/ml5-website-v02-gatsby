import React from "react";
import Button from "../components/Button";

import {
  logo,
  container,
  content,
  menus,
  textContainer,
} from '../styles//Footer.module.css';

const Footer = () => {
  return (
    <footer className={container}>
      <div className={logo}>
        <Button
          children="ml5.js"
          url="/#"
          fontSize="1.5rem"
          txtColor="var(--color-primary)"
          bgColor="white"
          padding="2.0rem 0.85rem"
        />
      </div>
      <div className={content}>
        <div className={menus}>
          <a href="/">Get Started</a>
          <a href="/">Reference</a>
          <a href="/">Learn</a>
          <a href="/">Community</a>
          <a href="/">Discord</a>
          <a href="/">GitHub</a>
          <a href="/">About Us</a>
        </div>
        <div className={textContainer}>
          <p>
            ml5.js is an open source project developed and maintained by NYU's Interactive Telecommunications / Interactive Media Arts program and by artists, designers, students, technologists, and developers from all over the world.
          </p>
          <p>
            Feel free to write us! <a>info@ml5js.org</a>
          </p>
          <p>
            Contribute to <a>Community Projects</a>, <a>Library Development</a>, <a>Documentation</a>, <a>Hero Sketch</a> and <a>more</a>!
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;