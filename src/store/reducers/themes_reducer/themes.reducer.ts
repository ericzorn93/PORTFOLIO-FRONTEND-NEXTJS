import { ThemeTypes } from "./../../types/theme_types/index";
import { IReduxAction } from "../../../../types/redux_types";

interface IThemeState {
  allThemes: object[];
  darkMode: object;
  lightMode: object;
}

const initialState = {
  allThemes: [],
  darkMode: {},
  lightMode: {}
};

const themesReducer = (
  state: IThemeState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    case ThemeTypes.ADD_ALL_THEME_DATA:
      return {
        ...state,
        allThemes: action.payload.allThemes,
        lightMode: action.payload.lightMode,
        darkMode: action.payload.darkMode
      };
    default:
      return state;
  }
};

export default themesReducer;
