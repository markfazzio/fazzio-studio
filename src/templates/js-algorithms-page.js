import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { light } from "react-syntax-highlighter/dist/esm/styles/prism";

import Layout from "../components/Layout";

// eslint-disable-next-line
export const JSAlgorithmsPageTemplate = ({ title, description, intro }) => {
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="tile is-ancestor">
          {intro && intro.algorithms ? (
            <>
              {intro.algorithms.map((item) => (
                <div class="tile is-parent is-4">
                  <article class="tile is-child box">
                    <p class="title">{item.title}</p>
                    <p class="subtitle">{item.description}</p>
                    <SyntaxHighlighter language="javascript" style={light}>
                      {item.code}
                    </SyntaxHighlighter>
                  </article>
                </div>
              ))}
            </>
          ) : undefined}
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
    algorithms: PropTypes.array,
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
          algorithms {
            title
            description
            code
          }
        }
      }
    }
  }
`;
