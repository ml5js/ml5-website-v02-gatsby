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
          <a href="https://ml5js.medium.com/" target="ml5 Medium" title="ml5 Medium">Medium</a>
          <a href="https://www.instagram.com/ml5js/" target="ml5 Instagram" title="ml5 Instagram">Instagram</a>
          <a href="https://twitter.com/ml5js?lang=en" target="ml5 X" title="ml5 X">X(Twitter)</a>
          <a href="https://discord.gg/sUtHWmgg" target="ml5 Discord" title="ml5 Discord">Discord</a>
          <a href="https://github.com/ml5js" target="ml5 GitHub" title="ml5 GitHub">GitHub</a>
          <a href="https://docs.ml5js.org/#/contributing/how-to-contribute" target="_self" title="Contribute">Contribute!</a>
        </div>
        <div className={textContainer}>
          <p>
            ml5.js is an open source project developed and maintained by NYU ITP/IMA and NYU Shanghai IMA programs and by artists, designers, students, technologists, and developers from all over the world.
          </p>
          <p>
            Feel free to contact us! <a>info@ml5js.org</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;