import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

const Error: React.FC = () => {
  return (
    <div
      css={theme => ({
        backgroundColor: theme.primary,
        color: theme.white || "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      })}
    >
      <h1>{"Error"}</h1>
    </div>
  );
};

export default Error;
