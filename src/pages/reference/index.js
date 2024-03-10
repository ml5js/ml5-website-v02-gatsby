import { graphql, Link } from 'gatsby';
import * as React from "react"
import Layout from "../../layout/Layout"

const IndexPage = ({ data, ...rest }) => {

  console.log(data, rest);

  // TODO: add frontmatter to all
  const pages = (data.pages.nodes ?? []).filter(node => node.frontmatter.slug);

  return (
    // if you plan to update header or footer, check the "Layout.js" file in "layout" folder.
    <Layout>
      <section aria-label="Model list">
        <ul>
          {pages.map((node) => {
            return (
              <li key={node.id}>
                <Link to={node.url}>
                  {node.frontmatter.title || node.headings[0]?.value}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  )
}

export const Head = () => <title>ml5.js | Reference Documentation</title>

export default IndexPage;

// GraphQL
export const query = graphql`
query ReferencePagesQuery {
  pages: allMarkdownRemark(
    filter: {fileAbsolutePath: {glob: "**/Reference/**"}}
    sort: {frontmatter: {title: ASC}}
  ) {
    nodes {
      id
      frontmatter {
        title
        slug
      }
      headings(depth: h1) {
        value
      }
      url: gatsbyPath(filePath: "/reference/{markdownRemark.frontmatter__slug}")
    }
  }
}
`
