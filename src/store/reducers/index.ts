import { combineReducers } from 'redux';

import themesReducer from './themes_reducer/themes.reducer';

const rootReducer = combineReducers({
  themes: themesReducer,
});

// Used as the root reducer for the redux store
export default rootReducer;
