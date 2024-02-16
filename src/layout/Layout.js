/*
TODO:
- helmet
- SiteMetadata
*/

import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

import {
  container,
} from '../styles/Layout.module.css';

import '/src/styles/global.css';

const Layout = ({ children }) => {
  return (
    <section>
      <Header />
      <div className={container}>
        {children}
      </div>
      <Footer />
    </section >
  )
}

export default Layout