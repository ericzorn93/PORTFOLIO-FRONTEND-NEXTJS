import { combineReducers } from 'redux';

import themesReducer from './themes_reducer/themes.reducer';
import menuBarReducer from './menu_bar_reducer';
import userAgentReducer from './user_agent_reducer/user.agent.reducer';

const rootReducer = combineReducers({
  menuBar: menuBarReducer,
  themes: themesReducer,
  userAgent: userAgentReducer,
});

// Used as the root reducer for the redux store
export default rootReducer;
