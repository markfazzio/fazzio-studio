// Control component - src/components/customWidget/CustomWidgetControl.js
import React, { PureComponent } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export class RichTextEditor extends PureComponent {
  onChange = (event, editor) => {
    const data = editor.getData();
    this.props.onChange(data);
  };

  render() {
    return <CKEditor editor={ClassicEditor} onChange={this.onChange} />;
  }
}

export default RichTextEditor;
