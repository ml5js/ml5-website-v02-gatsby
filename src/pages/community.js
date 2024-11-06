/*
what is there are no images? or external links?
*/

import * as React from "react";
import Layout from "../layout/Layout";
import Button from "../components/Button";
import ProjectBox from "../components/ProjectBox";
import Spacer from "../components/Spacer";
import IframeComponent from "../components/IframeComponent";
import { graphql } from "gatsby";

const CommunityPage = ({ data }) => {
  const events = data.allMarkdownRemark.nodes.filter(
    (node) => node.frontmatter.templateKey === "community-event"
  );
  const projects = data.allMarkdownRemark.nodes.filter(
    (node) => node.frontmatter.templateKey === "featured-project"
  );
  projects.sort((a, b) => Date.parse(b.frontmatter.date) - Date.parse(a.frontmatter.date));

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
      <Spacer height="2rem" />

      {/* <h2>Community Events</h2> */}
      {/* <p>Coming soon!</p> */}
      {/* <div style={styles.postContainer}>
        {events.map((event) => (
          <div key={event.id}>
            <TextBox
              title={event.frontmatter.title}
              content={[event.frontmatter.description]}
              headingLevel={3}
              width="95%"
            />
          </div>
        ))}
      </div> */}
      {/* <Spacer /> */}

      <h2>Featured Projects</h2>
      <div style={styles.postContainer}>
        {projects.map((project) => (
          <ProjectBox
            linkURL={project.frontmatter.externalLink}
            imageURL={project.frontmatter.image}
            title={project.frontmatter.title}
            author={project.frontmatter.author}
            description={project.frontmatter.description}
            tags={project.frontmatter.tags}
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
  );
};

export { Head } from '../components/Head';

export default CommunityPage;

// GraphQL
export const query = graphql`
  query CommunityQuery {
    allMarkdownRemark(
      filter: {
        frontmatter: {
          templateKey: { in: ["community-event", "featured-project"] }
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
          image
          externalLink
          featuredPost
          date
          tags
        }
      }
    }
  }
`;
