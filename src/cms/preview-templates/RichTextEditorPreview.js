import React from "react";

const RichTextEditorPreview = (props) => {
  return <div dangerouslySetInnerHTML={{ __html: props.value }} />;
};

export default RichTextEditorPreview;
