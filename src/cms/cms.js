import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import CodePagePreview from "./preview-templates/CodePagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import RichTextEditorPreview from "./preview-templates/RichTextEditorPreview";

import RichTextEditor from "../components/RichTextEditor";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("ts-algorithms", CodePagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);

CMS.registerWidget("richtext", RichTextEditor, RichTextEditorPreview);
