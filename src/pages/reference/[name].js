import * as React from "react"
import { graphql, Link } from "gatsby"

function ProductCatchAll({ params }) {
  console.log('component', params);
  return (
    <div className="wrapper">
      <header>
        <Link to="/">Go back to "Home"</Link>
      </header>
      <main>
        <h1>Couldn't find product</h1>
        <p>We couldn't locate the product "{params.name}"</p>
      </main>
    </div>
  )
}

export default ProductCatchAll

export const Head = ({ name }) => {
  // TODO: map slug to name
  return <title>{name} | ml5.js Reference</title>
}

export const pageQuery = graphql`
query {
  allMarkdownRemark(
    filter: {fileAbsolutePath: {glob: "**/Reference/**"}}
    sort: {frontmatter: {title: ASC}}
  ) {
    edges {
      node {
        id
        fileAbsolutePath
        headings(depth: h1) {
          value
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`
