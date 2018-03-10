import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { css } from "emotion";
import Header from "../components/Header.js";

import "typeface-montserrat";
import "semantic-ui-input/input.min.css";
import "semantic-ui-icon/icon.min.css";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Codex Card Database"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
    />
    <Header />
    <div
      className={css`
        margin: 0 auto;
        max-width: 1070px;
        padding: 0 1.0875rem 1.45rem;
        padding-top: 0;
      `}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
