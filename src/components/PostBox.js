import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { postBox } from "./PostBox.module.css";

const PostBox = ({ post }) => {
  const { title, author, date, keywords, description, excerpt, slug, image } = {
    title: post.frontmatter.title,
    author: post.frontmatter.author,
    keywords: post.frontmatter.keywords,
    description: post.frontmatter.description,
    excerpt: post.excerpt,
    slug: post.fields.slug,
    image: post.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  };

  return (
    <Link
      to={slug}
      className={postBox}
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <img src={image} alt={title} />
      <header>
        <h2 itemProp="name">{title}</h2>
        <h3 itemProp="name">{author}</h3>
        <p
          dangerouslySetInnerHTML={{
            __html: description || excerpt,
          }}
          itemProp="description"
        />
      </header>
    </Link>
  );
};

PostBox.propTypes = {
  post: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      author: PropTypes.string,
      keywords: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          gatsbyImageData: PropTypes.shape({
            images: PropTypes.shape({
              fallback: PropTypes.shape({
                src: PropTypes.string.isRequired,
              }),
            }),
          }),
        }),
      }),
    }),
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }),
    excerpt: PropTypes.string,
  }).isRequired,
};

export default PostBox;