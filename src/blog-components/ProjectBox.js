import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import { projectBox } from "./ProjectBox.module.css";

const ProjectBox = ({ project }) => {
  const { title, date, keywords, description, excerpt, slug, image } = {
    title: project.frontmatter.title,
    keywords: project.frontmatter.keywords,
    description: project.frontmatter.description,
    excerpt: project.excerpt,
    slug: project.fields.slug,
    image: project.frontmatter.image.childImageSharp.gatsbyImageData.images.fallback.src,
  };

  return (
    <Link
      to={slug}
      className={projectBox}
      itemScope
      itemType="http://schema.org/CreativeWork"
    >
      <img src={image} alt={title} />
      <header>
        <h2 itemProp="name">{title}</h2>
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

ProjectBox.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
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

export default ProjectBox;