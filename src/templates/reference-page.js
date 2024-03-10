import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout/Layout';

const Template = ({ data, ...rest }) => {
  console.log('template', data, rest);
  const post = data.markdownRemark;
  return (
    <Layout>
      <div
        style={{ display: 'flex' }}
      >
        <div
          style={{ width: 250, overflowX: 'hidden', paddingRight: 30 }}
          dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
        />
        <div
          style={{ flex: 1 }}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      tableOfContents
      frontmatter {
        title
      }
    }
  }
`;

export default Template;
