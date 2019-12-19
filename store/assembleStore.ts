import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers/rootReducer";
import { PrimaryUtils } from "../shared/utils/primary.utils";

function assembleStore() {
  const reduxMiddleware = [thunk];

  let composed;
  if (PrimaryUtils.isDevelopment) {
    const composeEnhancers = composeWithDevTools({});
    composed = composeEnhancers(applyMiddleware(...reduxMiddleware));
  } else {
    composed = compose(applyMiddleware(...reduxMiddleware));
  }

  return createStore(rootReducer, composed);
}

export default assembleStore;
