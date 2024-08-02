// TODO: replace it with the following code

/*
import React from "react";
import Layout from "../components/Layout";

const NotFoundPage = () => (
  <Layout>
    <section className="ml5Grid__wrapper">
      <div className="ml5Grid__container">
        <section className="ml5Grid__sidebar">
          <div className="Sidebar__container" />
        </section>

        <div className="ml5Grid__content">
          <h1>Sorry, we lost a page here, but we found a Shiffman video!</h1>
          <div class="iframe__container iframe__container--video">
            <iframe
              title="404"
              src="https://www.youtube.com/embed/jmznx0Q1fP0"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default NotFoundPage;
*/

import * as React from "react"
import { Link } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Page not found</h1>
      <p style={paragraphStyles}>
        Sorry 😔, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head = () => (
	<>
		<title>Not found</title>
		<meta
			property="og:image"
			content="https://ml5js.org/favicon/og-image.png"
		/>
		<meta property="og:image:width" content="1280" />
		<meta property="og:image:width" content="640" />
		<link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/favicon/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/favicon/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/favicon/favicon-16x16.png"
		/>
		<link rel="manifest" href="/favicon/site.webmanifest" />
	</>
);


