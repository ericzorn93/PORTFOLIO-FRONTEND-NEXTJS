import { combineReducers } from "redux";

import { themeReducer } from "./theme_reducer/theme.reducer";
import { projectReducer } from "./project_reducer/project.reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  projects: projectReducer
});

export default rootReducer;
