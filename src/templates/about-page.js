import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

// components
import IconPDF from "../components/IconPDF";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

import resumeFile from "../img/mark-fazzio-resume.pdf";

// eslint-disable-next-line
export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient about-page">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="box">
              <div className="columns">
                <div className="column">
                  <h1 className="title">{title}</h1>
                </div>
                <div className="column has-text-right">
                  <a className="button button--icon" href={resumeFile} download>
                    <IconPDF />
                  </a>
                </div>
              </div>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
