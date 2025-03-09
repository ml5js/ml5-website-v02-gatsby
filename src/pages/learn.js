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
        The ml5.js Learn page is dedicated to supporting artists, technologists, makers, activists, thinkers, tinkerers, researchers, scientists, designers, students, and anyone/everyone interested in exploring machine learning in accessible and creative ways. The tutorials not only introduce the fundamentals of ml5.js but also demonstrate how machine learning methodologies and technologies can be applied more broadly.
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