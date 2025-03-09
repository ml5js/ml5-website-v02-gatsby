import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../layout/Layout";
import Spacer from "../components/Spacer";
import IframeComponent from "../components/IframeComponent";
// import Bio from "../components/Bio"
import PostLayout from "../components/PostLayout";
import PostBox from "../components/PostBox";
import Seo from "../components/seo";


const PostIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  // if there are no posts, display a message
  if (posts.length === 0) {
    return (
      <Layout>
        <IframeComponent />
        <h1>Blog</h1>
        <PostLayout location={location} title={siteTitle}>
          {/* <Bio /> */}
          <p>
            No posts found.
          </p>
        </PostLayout>
        <Spacer />
      </Layout>
    )
  }

  // if there are posts, display them in a grid
  return (
    <Layout>
      <IframeComponent />
      <h1>Blog</h1>
      <PostLayout location={location} title={siteTitle}>
        <div className="project-grid">
          {posts.map(post => (
            <PostBox key={post.fields.slug} post={post} />
          ))}
        </div>
        {/* <Bio /> */}
      </PostLayout>
      <Spacer />
    </Layout>

  )
}

export default PostIndex

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { 
        frontmatter: { 
          templateKey: { eq: "blog-post" } 
        } 
      }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          keywords
          featured
          templateKey
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED),
            }
          }
        }
      }
    }
  }
`


// sort: { frontmatter: { date: DESC } } // in allMarkdownRemark
// date(formatString: "MMMM DD, YYYY") // in frontmatter