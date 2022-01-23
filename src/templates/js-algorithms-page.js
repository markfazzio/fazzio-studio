import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";

// eslint-disable-next-line
export const JSAlgorithmsPageTemplate = ({
  image,
  title,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;

  return (
    <div>
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {title}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Features gridItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

JSAlgorithmsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const JSAlgorithmsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <JSAlgorithmsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

JSAlgorithmsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default JSAlgorithmsPage;

export const pageQuery = graphql`
  query JSAlgorithmsPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "js-algorithms-page" } }) {
      frontmatter {
        title
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
              extension
              publicURL
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
