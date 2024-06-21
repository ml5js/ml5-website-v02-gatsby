import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";

import {
  navbar,
  logo,
  menu,
} from '../styles/Header.module.css';

const Header = () => {
  const styles = {
    navbarWide: {
      backgroundColor: "rgba(255, 255, 255, 0.5)",
      borderBottom: "none",
      height: "var(--navbar-init-height)", // initial height. check global.css
      transition: "height 0.3s ease",
    },
    navbarNarrow: {
      backgroundColor: "rgba(255, 255, 255, 1.0)",
      borderBottom: "#ddd solid 1px",
      height: "3.5rem", // reduced height after scrolling
      transition: "height 0.3s ease",
    }
  };

  // detect if page is scrolled
  const [isScrolled, checkIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // check if page is scrolled more than 30 pixels
      checkIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <nav className={navbar} style={isScrolled ? styles.navbarNarrow : styles.navbarWide}>
        <div className={logo}>
          <Button
            children="ml5.js"
            url="/#"
            fontSize="1.5rem"
            txtColor="var(--color-primary)"
            bgColor="var(--color-transparent)"
            padding="0.3rem 0.8rem"
          />
        </div>
        <div className={menu}>
          <Button
            children="Getting Started"
            url="https://docs.ml5js.org/#/"
            txtColor="var(--color-text-dark)"
            bgColor="var(--color-transparent)"
            fontSize="0.9rem"
          />
          <Button
            children="Reference"
            url="https://docs.ml5js.org/#/reference/overview"
            txtColor="var(--color-text-dark)"
            bgColor="var(--color-transparent)"
            fontSize="0.9rem"
          />
          <Button
            children="Learn"
            url="/learn"
            txtColor="var(--color-text-dark)"
            bgColor="var(--color-transparent)"
            fontSize="0.9rem"
          />
          <Button
            children="Community"
            url="/community/"
            txtColor="var(--color-text-dark)"
            bgColor="var(--color-transparent)"
            fontSize="0.9rem"
          />
          <Button
            children="About"
            url="/about/"
            txtColor="var(--color-text-dark)"
            bgColor="var(--color-transparent)"
            fontSize="0.9rem"
          />
        </div>
      </nav>
    </header>
  )
}

export default Header;