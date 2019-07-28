import React from "react";

import LoadingErrorBG from "../../global/styles/styled_components/LoadingErrorBG";

const Loading: React.FC = () => {
  return (
    <LoadingErrorBG>
      <h1>Loading...</h1>
    </LoadingErrorBG>
  );
};

export default Loading;
