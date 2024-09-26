// import React from "react";
// import { graphql } from "gatsby";

// const MarkdownTemplate = ({ data }) => {
//   const { markdownRemark } = data; // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark;

//   return (
//     <div>
//       <h1>{frontmatter.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: html }} />
//     </div>
//   );
// };

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//       }
//     }
//   }
// `;

// // GraphQL
// // export const query = graphql`
// //   query CommunityQuery {
// //     allMarkdownRemark(
// //       filter: { frontmatter: { featuredPost: { eq: true } } }
// //     ) {
// //       nodes {
// //         id
// //         frontmatter {
// //           title
// //           author
// //           description
// //           image
// //           externalLink
// //         }
// //       }
// //     }
// //   }
// // `

// export default MarkdownTemplate;