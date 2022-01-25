import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import Layout from "../components/Layout";

// eslint-disable-next-line
export const CodePageTemplate = ({ title, description, content }) => {
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
                      <h3 className="has-text-weight-semibold has-text-primary is-size-2 title">
                        {title}
                      </h3>
                      <p className="subtitle">{description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="code-grid">
          {content && content.snippets ? (
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 1023: 3, 1408: 4 }}
            >
              <Masonry gutter="15px">
                {content.snippets.map((item, index) => (
                  <div
                    className="code-tile box"
                    key={`ts-algorithm-num-${index}`}
                  >
                    <p className="title is-size-4">{item.title}</p>
                    <p className="subtitle">
                      <small>{item.description}</small>
                    </p>
                    {item.code && item.code.code ? (
                      <SyntaxHighlighter
                        language="javascript"
                        style={materialLight}
                      >
                        {item.code.code}
                      </SyntaxHighlighter>
                    ) : (
                      <p>No code yet for this problem.</p>
                    )}
                  </div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          ) : undefined}
        </div>
      </section>
    </div>
  );
};

CodePageTemplate.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.shape({
    snippets: PropTypes.array,
  }),
};

const CodePage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <CodePageTemplate
        title={frontmatter.title}
        description={frontmatter.description}
        content={frontmatter.content}
      />
    </Layout>
  );
};

CodePage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default CodePage;

export const pageQuery = graphql`
  query CodePageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "code-page" } }) {
      frontmatter {
        title
        description
        content {
          snippets {
            title
            description
            code {
              code
            }
          }
        }
      }
    }
  }
`;
