import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];
const composeEnhancers = composeWithDevTools({});

// Determine if devtools need to be present, based on the node environment
let loadMiddleware: any;
if (process.env.NODE_ENV !== "production") {
  loadMiddleware = composeEnhancers(applyMiddleware(...middleware));
} else {
  loadMiddleware = applyMiddleware(...middleware);
}

const store = createStore(rootReducer, loadMiddleware);
export default store;
