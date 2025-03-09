import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../layout/Layout";
import PostLayout from "../components/PostLayout";
import Seo from "../components/seo";
import Spacer from "../components/Spacer";

const PostTemplate = ({
  data: { previous, next, site, markdownRemark: post, allFile },
  location,
}) => {
  const siteTitle = site.siteMetadata?.title || `Title`;

  const processDate = (date) => {
    if (date.includes(",")) {
      // Split string into an array by commas
      const dateArray = date.split(",").map((d) => d.trim()); // Remove extra spaces

      // Map through the array to format each date
      return dateArray
        .map((d, index) => {
          const formattedDate = formatDate(d);
          if (index === dateArray.length - 2) {
            // Add "and" before the second-to-last date
            return `${formattedDate} and`;
          } else if (index < dateArray.length - 2) {
            // Add a comma for all other dates except the last
            return `${formattedDate},`;
          }
          return formattedDate; // Last date, no punctuation
        })
        .join(" "); // Combine the mapped strings with spaces
    } else if (typeof date === "string" && date.includes(" to ")) {
      // Handle date ranges (e.g., "YYYY-MM-DD to YYYY-MM-DD")
      const [start, end] = date.split(" to ");
      return `${formatDate(start)} - ${formatDate(end)}`;
    } else {
      // Single date case
      return formatDate(date);
    }
  };

  const formatDate = (date) => {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const parts = date.split("-");
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1; // Convert month to zero-based index
    const day = parts[2];

    const monthName = monthNames[monthIndex];
    // lower case 
    if (date.toLowerCase() === "present") {
      return "Present";
    }
    else if (day === "00") {
      return `${monthName} ${year}`; // Omit day
    }
    return `${monthName} ${day}, ${year}`;
  };

  return (
    <Layout>
      <PostLayout location={location} title={siteTitle}>
        {/* apply this style somewhere else */}
        <article
          style={{ maxWidth: "800px", margin: "0 auto" }}
          className="post"
          itemScope
          itemType="http://schema.org/CreativeWork"
        >
          <Spacer height="4rem" />
          <header>
            <h1 itemProp="name">{post.frontmatter.title}</h1>
            <p itemProp="dateCreated">
              <span itemProp="description">{post.frontmatter.keywords}</span>
              &nbsp;&nbsp;|&nbsp;&nbsp;
              <span itemProp="dateCreated">{processDate(post.frontmatter.date)} </span>
            </p>
          </header>
          <Spacer height="2rem" />

          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="description"
          />

          <footer></footer>
        </article>

        {/* <nav className="post-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav> */}
      </PostLayout>
    </Layout>
  );
};

export const Head = ({ data: { markdownRemark: post } }) => {
  return (
    <Seo
      title={"ml5.js | " + post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        keywords
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
