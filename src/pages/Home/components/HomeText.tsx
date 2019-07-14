import React, { Fragment } from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const HomeText: React.FC = () => {
  return (
    <Fragment>
      <h1 css={theme => ({ color: theme.secondary })}>{"Hi, I'm Eric,"}</h1>
      <h2 css={theme => ({ color: theme.secondary })}>
        {"Full-Stack Software Engineer"}
      </h2>
      <h4 css={theme => ({ color: theme.secondary })}>
        {"I Enjoy all things tech and hip"}
      </h4>
    </Fragment>
  );
};

export default HomeText;
