import { combineReducers } from "redux";

import { userReducer } from "./user_reducer/user.reducer";
import { themeReducer } from "./theme_reducer/theme.reducer";
import { projectReducer } from "./project_reducer/project.reducer";

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  projects: projectReducer
});

export default rootReducer;
