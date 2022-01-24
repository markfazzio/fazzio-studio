import * as React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width-image-container margin-top-0 blog-image"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <div className="page-meta has-text-centered">
            <h1 className="title has-text-weight-bold is-size-1">Blog Posts</h1>
            <p className="subtitle">Tech Articles, Code Discussions & More</p>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
