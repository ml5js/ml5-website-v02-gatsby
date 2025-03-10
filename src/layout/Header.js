import * as React from "react";
import { useState, useEffect } from "react";
import Button from "../components/Button";

import {
  navbar,
  logo,
  menu,
  menuToggle,
  menuActive,
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
      zIndex: 100,
    }
  };

  // detect if page is scrolled
  const [isScrolled, checkIsScrolled] = useState(false);
  // state for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  // toggle menu open/closed
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={navbar} style={isScrolled ? styles.navbarNarrow : isMenuOpen ? styles.navbarNarrow : styles.navbarWide}>
        <div className={logo}>
          <Button
            children="ml5.js"
            url="/#"
            fontSize="1.5rem"
            txtColor="var(--color-primary)"
            bgColor="var(--color-transparent)"
            padding="0.1rem 0.8rem"
          />

          {/* Mobile menu toggle button */}
          <button
            type="button"
            className={menuToggle}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`${menu} ${isMenuOpen ? menuActive : ''}`}>
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
