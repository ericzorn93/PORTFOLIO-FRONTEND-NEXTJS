import React from "react";
/** @jsx jsx */
import { jsx } from "@emotion/core";

import LoadingErrorBG from "../../styles/global/styled_components/LoadingErrorBG";

const Loading: React.FC = () => {
  return (
    <LoadingErrorBG>
      <h1>Loading...</h1>
    </LoadingErrorBG>
  );
};

export default Loading;
