import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Error: React.FC = () => {
  return (
    <div
      css={theme => ({
        backgroundColor: theme.primary
      })}
    >
      <h1>Error</h1>
    </div>
  );
};

export default Error;
