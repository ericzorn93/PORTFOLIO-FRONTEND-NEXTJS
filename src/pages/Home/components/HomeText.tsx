import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const HomeText: React.FC = () => {
  return (
    <div>
      <h1 css={theme => ({ color: theme.secondary })}>Hello Test</h1>
    </div>
  );
};

export default HomeText;
