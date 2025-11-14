import * as React from "react";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import ProjectBox from "../components/ProjectBox";
import PostLayout from "../components/PostLayout";
import PostBox from "../components/PostBox";
import Spacer from "../components/Spacer";
import IframeComponent from "../components/IframeComponent";
import { graphql } from "gatsby";

const CommunityPage = ({ data, location }) => {
  const projects = data.allMarkdownRemark.nodes.filter(
    (node) => node.frontmatter.templateKey === "featured-project"
  );
  projects.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes.filter(
    (node) => node.frontmatter.templateKey === "blog-post"
  );
  posts.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

  const styles = {
    postContainer: {
      width: "100%",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      gap: "2rem",
    },
  };

  return (
    <Layout>
      <IframeComponent />
      <h1>Community</h1>
      <p>
        The ml5.js community page is dedicated to highlighting artists,
        technologists, makers, activists, thinkers, tinkerers, researchers,
        scientists, designers, students, and anyone/everyone who are working in
        and around machine learning in thoughtful ways. Many of these posts not
        only showcase what is possible with ml5.js but also what can be done
        when applying machine learning methodologies and technologies more
        broadly. Special emphasis is given to projects that highlight ethical
        and critical engagement with technology and/or are simply delightful.
      </p>
                              <Button
            children="Submit Your Project!"
            url="https://forms.gle/5EpwYabG8hLn4p926"
            target="_blank"
            fontSize="1.1rem"
            borderStyle="solid"
            padding="0.5rem 1.0rem"
            margin="1.5rem 0"
          />
      <Spacer height="2rem" />

      {projects.length > 0 && (
        <>
          <h2>Featured Projects </h2> 
          <div style={styles.postContainer}>
            {projects.map((project) => (
              <ProjectBox
                linkURL={project.frontmatter.externalLink}
                //imageURL={project.frontmatter.image}
                image={project.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}
                title={project.frontmatter.title}
                author={project.frontmatter.author}
                description={project.frontmatter.description}
                tags={project.frontmatter.tags}
              />
            ))}
          </div>  
          <Spacer height="2rem" />
        </>
      )}

      {posts.length > 0 && (
        <>
          <h2>Blog & Changelog</h2>
          <PostLayout location={location} title={siteTitle}>
            <div className="project-grid">
              {posts.map(post => (
                <PostBox key={post.fields.slug} post={post} />
              ))}
            </div>
            {/* <Bio /> */}
          </PostLayout>
          <Spacer height="2rem" />
        </>
      )}

      <h2>Contribute!</h2>
      <p>
        If you are interested to share your work, highlight an interesting
        article/video, or get in touch, we'd love to hear from you!
      </p>
      <Button
        children="Submit"
        url="https://forms.gle/5EpwYabG8hLn4p926"
        target="_blank"
        fontSize="1.1rem"
        borderStyle="solid"
        padding="0.5rem 1.0rem"
        margin="1.5rem 0"
      />
    </Layout>
  );
};

export { Head } from '../components/Head';

export default CommunityPage;

// GraphQL

export const query = graphql`
  query MergedQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: ["featured-project", "blog-post"] }
        }
      }
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          templateKey
          title
          author
          description
          keywords
          tags
          featured
          externalLink
          date
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED),
            }
          }
        }
      }
    }
  }
`;