import React, { Fragment } from "react";

const HomeText: React.FC = () => {
  return (
    <Fragment>
      <h1 style={{ color: "white", fontFamily: "sans-serif" }}>
        {"Hi, I'm Eric,"}
      </h1>
      <h2 style={{ color: "white", fontFamily: "sans-serif" }}>
        {"Full-Stack Software Engineer"}
      </h2>
      <h4 style={{ color: "white", fontFamily: "sans-serif" }}>
        {"I Enjoy all things tech and hip."}
      </h4>
    </Fragment>
  );
};

export default HomeText;
