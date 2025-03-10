import * as React from "react";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import ProjectBox from "../components/ProjectBox";
import Spacer from "../components/Spacer";
import IframeComponent from "../components/IframeComponent";
import { graphql } from "gatsby";


const LearnPage = ({ data }) => {
  const tutorials = data.allMarkdownRemark.nodes.filter(
    (node) => node.frontmatter.templateKey === "tutorial"
  );
  tutorials.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

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
      <h1>Learn</h1>
      <p>
        Learning machine learning is an exciting journey that we can explore together. 
        The ml5.js Learn page provides tutorials, articles, and videos covering 
        various machine learning and creative coding topics. This is a community 
        space where practitioners share knowledge and learn from each other. 
        If you have a machine learning insight or experience that could help others, 
        please consider submitting a tutorial using the form below.
      </p>
      <Spacer height="2rem" />

      <h2>Tutorials</h2>
      <div style={styles.postContainer}>
        {tutorials.map((tutorial) => (
          <ProjectBox
            linkURL={tutorial.frontmatter.externalLink}
            //imageURL={tutorial.frontmatter.image}
            image={tutorial.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src}
            title={tutorial.frontmatter.title}
            author={tutorial.frontmatter.author}
            description={tutorial.frontmatter.description}
            tags={tutorial.frontmatter.tags}
          />
        ))}
      </div>
      <Spacer height="2rem" />

      <h2>Contribute!</h2>
      <p>
        If you are interested to share your work, highlight an interesting
        article/video, or get in touch, we'd love to hear from you!
      </p>
      <Button
        children="Submit"
        url="https://docs.google.com/forms/d/e/1FAIpQLSdPz0ICzTSVdLAteIKwJ-zFzX6dX5l3dOpjWGzm6LIZutKvlA/viewform"
        target="_blank"
        fontSize="1.1rem"
        borderStyle="solid"
        padding="0.5rem 1.0rem"
        margin="1.5rem 0"
      />
    </Layout>
  )
}

export { Head } from '../components/Head';
export default LearnPage

export const query = graphql`
  query CommunityQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: ["tutorial"] }
        }
      }
    ) {
      nodes {
        id
        frontmatter {
          templateKey
          title
          author
          description
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED),
            }
          }
          externalLink
          tags
          featured
        }
      }
    }
  }
`;