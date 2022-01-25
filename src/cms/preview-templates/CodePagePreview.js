import React from "react";
import PropTypes from "prop-types";
import { CodePageTemplate } from "../../templates/code-page";

const CodePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <CodePageTemplate
        title={data.title}
        description={data.description}
        content={data.content || { snippets: [] }}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

CodePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default CodePagePreview;
