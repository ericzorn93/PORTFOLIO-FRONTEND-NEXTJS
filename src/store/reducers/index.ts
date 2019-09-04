import { combineReducers } from 'redux';

import themesReducer from './themes_reducer/themes.reducer';
import menuBarReducer from './menu_bar_reducer';

const rootReducer = combineReducers({
  menuBar: menuBarReducer,
  themes: themesReducer,
});

// Used as the root reducer for the redux store
export default rootReducer;
