/*
TODO:
- SiteMetadata
*/

import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

import {
	container,
} from '../styles/Layout.module.css';

const Layout = ({ children }) => {
	return (
		<>
			<body>
				<Header />
				<div className={container}>{children}</div>
				<Footer />
			</body>
		</>
	);
}



export default Layout