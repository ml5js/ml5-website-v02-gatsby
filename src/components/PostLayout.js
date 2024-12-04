import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {/* {title} */}
        {/* <div>test</div> */}
      </Link>
    )
  }

  return (
    <div data-is-root-path={isRootPath}>
      {/* <header className="global-header">
        {header}
      </header> */}
      <main>{children}</main>
      <footer>
        {/* perhaps bio could come? */}
        {/* © {new Date().getFullYear()}, {` `}
        <a href="https://www.ml5js.org/">ml5</a>. {` `}
        All rights reserved. */}
      </footer>
    </div>
  )
}

export default Layout
