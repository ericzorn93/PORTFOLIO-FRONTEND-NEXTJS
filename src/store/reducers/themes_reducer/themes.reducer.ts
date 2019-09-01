import { ThemeTypes } from "./../../types/theme_types/index";
import { IReduxAction } from "../../../../types/redux_types";

import {
  ITheme,
  ICombinedTheme
} from "../../../utils/primary_interfaces/theme.interface";

interface IThemeState {
  allThemes: ICombinedTheme;
  darkMode: ITheme;
  lightMode: ITheme;
  currentThemeName: string;
  currentTheme: ITheme;
}

const initialState: IThemeState = {
  allThemes: {
    darkMode: {},
    lightMode: {}
  },
  darkMode: {},
  lightMode: {},
  currentThemeName: "",
  currentTheme: {}
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
        darkMode: action.payload.darkMode,
        currentTheme: action.payload.darkMode,
        currentThemeName: action.payload.currentThemeName
      };
    case ThemeTypes.UPDATE_CURRENT_THEME:
      return {
        ...state,
        currentTheme: state.allThemes[action.payload],
        currentThemeName: action.payload.currentThemeName
      };
    default:
      return state;
  }
};

export default themesReducer;
