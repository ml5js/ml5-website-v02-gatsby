const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
/*
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `reference` });
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
  }
};
*/
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      query ReferencePagesQuery {
        allMarkdownRemark(
          filter: {fileAbsolutePath: {glob: "**/Reference/**"}}
          sort: {frontmatter: {title: ASC}}
        ) {
          nodes {
            id
            frontmatter {
              title
              slug
            }
            url: gatsbyPath(filePath: "/reference/{markdownRemark.frontmatter__slug}")
          }
        }
      }
    `).then(result => {
      console.log(result);
      result.data.allMarkdownRemark.nodes.forEach((node) => {
        console.log(node);
        const slug = node.frontmatter.slug;
        createPage({
          path: node.url,
          component: path.resolve(`./src/templates/reference-page.js`),
          context: {
            slug: slug,
            title: node.frontmatter.title,
            id: node.id
          },
        });
      });
      resolve();
    });
  });
};
