import * as React from "react"
import Layout from "../layout/Layout"
import Hero from '../layout/Hero'
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import TextBox from "../components/TextBox";
import ProjectBox from "../components/ProjectBox";
import Spacer from "../components/Spacer";
import IframeBgComponent from "../components/IframeBgComponent";
import TextQuoted from "../components/TextQuoted";
import Button from "../components/Button";
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  const styles = {
    flexContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }

  return (
    // if you plan to update header or footer, check the "Layout.js" file in "layout" folder.
    <Layout>
      <IframeBgComponent />

      <section aria-label="Hero">
        <Hero
          title="Friendly Machine Learning for the Web"
          subtitle="A neighborly approach to creating and exploring artificial intelligence in the browser."
        />
        <ScrollDownIndicator />
      </section>
      <Spacer height="5rem" />

      <section aria-label="Introduction to ml5.js">
        <div style={styles.flexContainer}>
          <h1>Why ml5.js?</h1>
        </div>
        <TextQuoted
          content="More Approachable Machine Learning for the Web"
        />
        <TextBox
          content="ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies."
        />
        <Spacer height="5rem" />
        <div style={styles.flexContainer}>
          <h1>What we can do with ml5.js?</h1>
        </div>
        <div style={styles.flexContainer}>
          <ProjectBox
            title="BodyPose"
            description="Full-body pose estimation"
            imageURL="images/homepage-icon-bodypose.png"
            linkURL="https://docs.ml5js.org/#/reference/bodypose"
          />
          <ProjectBox
            title="HandPose"
            description="Hand-skeleton finger tracking"
            imageURL="images/homepage-icon-handpose.png"
            linkURL="https://docs.ml5js.org/#/reference/handpose"
          />
          <ProjectBox
            title="FaceMesh"
            description="Facial landmark detection"
            imageURL="images/homepage-icon-facemesh.png"
            linkURL="https://docs.ml5js.org/#/reference/facemesh"
          />
          <ProjectBox
            title="ImageClassifier"
            description="Image content recognition"
            imageURL="images/homepage-icon-image-classifier.png"
            linkURL="https://docs.ml5js.org/#/reference/image-classifier"
          />
          <ProjectBox
            title="SoundClassifier"
            description="Audio detection and classification"
            imageURL="images/homepage-icon-sound-classifier.png"
            linkURL="https://docs.ml5js.org/#/reference/sound-classifier"
          />
          <ProjectBox
            title="ml5 NeuralNetwork"
            description="Train your own neural networks"
            imageURL="images/homepage-icon-neural-network.png"
            linkURL="https://docs.ml5js.org/#/reference/neural-network"
          />
        </div>
        <div style={styles.flexContainer}>
          <Button
            children="Learn More"
            url="https://docs.ml5js.org/#/reference/overview"
            fontSize="1.1rem"
            borderStyle="solid"
            padding="0.5rem 1.0rem"
            margin="1.5rem 0"
          />
        </div>


      </section>

      <Spacer height="5rem" />

      <section aria-label="Featured Projects">
        <div style={styles.flexContainer}>
          <h1>
            Discover the creative possibilities of machine learning!
          </h1>
          <p>
            Coming soon!
          </p>
          {/* <div style={styles.flexContainer}>
          {posts.map((post) => (
            // <div key={post.id}></div>
            <ProjectBox
              title={post.frontmatter.title}
              description={post.frontmatter.author}
              width="100%"
              bgColor="var(--color-bg-light)"
            />
          ))}
        </div> */}
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <title>ml5.js | Friendly Machine Learning for the Web</title>

export default IndexPage;

// GraphQL
export const query = graphql`
  query CommunityQuery {
    allMarkdownRemark(
      filter: { frontmatter: { featuredPost: { eq: true } } }
    ) {
      nodes {
        id
        frontmatter {
          title
          author
          description
          image
          externalLink
        }
      }
    }
  }
`
