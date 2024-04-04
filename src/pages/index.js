import * as React from "react"
import Layout from "../layout/Layout"
import Hero from '../layout/Hero'
import ScrollDownIndicator from "../components/ScrollDownIndicator";
import TextBox from "../components/TextBox";
import ProjectBox from "../components/ProjectBox";
import Spacer from "../components/Spacer";
import IframeBgComponent from "../components/IframeBgComponent";
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
      <Spacer height="3rem" />
      <section aria-label="Introduction to ml5.js">
        <h2>
          Why ml5.js?
        </h2>
        <TextBox
          title='"More Approachable Machine Learning for the Web"'
          content="ml5.js aims to make machine learning approachable for a broad audience of artists, creative coders, and students. The library provides access to machine learning algorithms and models in the browser, building on top of TensorFlow.js with no other external dependencies."
          headingLevel={3}
        />
        <Spacer />
        <h2>
          What we can do with ml5.js?
        </h2>
        <div style={styles.flexContainer}>
          <ProjectBox
            title="BodyPose"
            description="Description"
          />
          <ProjectBox
            title="HandPose"
            description="Description"
          />
          <ProjectBox
            title="FaceMesh"
            description="Description"
          />
          <ProjectBox
            title="Image Classifier"
            description="Description"
          />
          <ProjectBox
            title="Sound Classifier"
            description="Description"
          />
          <ProjectBox
            title="ml5.js Neural Network"
            description="Description"
          />
        </div>
        <Spacer height="3rem" />
      </section>

      <section aria-label="Featured Projects">
        <h2>
          Discover the creative possibilities of machine learning!
        </h2>
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
