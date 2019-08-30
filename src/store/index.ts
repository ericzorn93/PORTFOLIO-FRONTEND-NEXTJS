import { createStore, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

/**
 * @description Returns the necessary instance of the redux store
 */
const assembleStore = () => {
  const reduxMiddleware = [thunk];

  let composedTools: any;
  if (process.env.NODE_ENV === "production") {
    const composeEnhancers = composeWithDevTools({});
    composedTools = composeEnhancers(applyMiddleware(...reduxMiddleware));
  } else {
    composedTools = compose(applyMiddleware(...reduxMiddleware));
  }

  const store = createStore(rootReducer, composedTools);

  return store;
};

export default assembleStore;
