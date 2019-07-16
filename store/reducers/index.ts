import { combineReducers } from "redux";

import themeReducer from "./theme.reducer";

const rootReducer = combineReducers({
  themes: themeReducer
});

export default rootReducer;
