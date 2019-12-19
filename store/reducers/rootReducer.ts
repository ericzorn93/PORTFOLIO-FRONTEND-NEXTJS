import { combineReducers } from 'redux';

import { themeReducer } from './theme_reducer/theme.reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export default rootReducer;
