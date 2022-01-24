import * as React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { Link } from "gatsby";

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map((item) => (
      <div key={item.text} className="column is-4">
        <section className="section box">
          <div className="has-text-centered">
            <div
              style={{
                width: "240px",
                display: "inline-block",
              }}
            >
              {item.target && item.target === "external" ? (
                <a href={item.url} target="_blank" rel="noreferrer">
                  <PreviewCompatibleImage imageInfo={item} />
                </a>
              ) : (
                <Link to={item.url}>
                  <PreviewCompatibleImage imageInfo={item} />
                </Link>
              )}
            </div>
          </div>

          <div className="has-text-centered mt-2">
            {item.target && item.target === "external" ? (
              <a
                className="button is-link"
                href={item.url}
                target="_blank"
                rel="noreferrer"
              >
                {item.text}
              </a>
            ) : (
              <Link className="button is-link" to={item.url}>
                {item.text}
              </Link>
            )}
          </div>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string,
    })
  ),
};

export default FeatureGrid;
