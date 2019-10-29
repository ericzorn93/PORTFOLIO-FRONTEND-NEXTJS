import React from "react";
import { Provider } from "react-redux";

import assembleStore from "./assembleStore";

const ReduxWrapper: React.FC<any> = ({ element }) => {
  // Redux Store
  const store = assembleStore();

  return <Provider store={store}>{element}</Provider>;
};

export default ReduxWrapper;
