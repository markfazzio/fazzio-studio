import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
// import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Divider from "../components/Divider";
// import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  // image,
  title,
  // heading,
  subheading,
  mainpitch,
  // description,
  intro,
}) => {
  // const heroImage = getImage(image) || image;

  return (
    <div>
      {/* <FullWidthImage img={heroImage} title={title} subheading={subheading} /> */}
      <section className="section--soundcloud">
        <iframe
          title="Mark Fazzio SoundCloud Piano Playlist"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1384186123&color=%231b1e6c&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        />
        <div className="site-title-wrapper has-text-centered">
          <div className="site-title">
            <h1 className="title has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-0-widescreen">
              {title}
            </h1>
            <h2 className="subtitle has-text-weight-bold">
              <small>{subheading}</small>
            </h2>
          </div>
        </div>
      </section>
      <Divider />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h1 className="title is-size-2 has-text-primary">
                    {mainpitch.title}
                  </h1>
                  <p className="subtitle">{mainpitch.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <h3 className="has-text-weight-semibold has-text-primary is-size-3">
                    Current Projects
                  </h3>
                  <Features gridItems={intro.blurbs} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Divider />
      <section className="section section--gradient has-background-light	">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column">
                <div className="content">
                  <div className="columns is-multiline">
                    <div className="column">
                      <h3 className="has-text-weight-semibold has-text-primary is-size-3">
                        Latest Posts
                      </h3>
                      <BlogRoll />
                      <div className="column is-12 has-text-centered">
                        <Link className="btn" to="/blog">
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        mainpitch {
          title
          description
        }
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
            url
            target
          }
          heading
          description
        }
      }
    }
  }
`;
