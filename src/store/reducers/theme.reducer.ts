import { LOAD_THEMES, UPDATE_SELECTED_THEME } from "./../types/theme.types";
import Action from "../interfaces/action.interface";

const initialThemeState = {
  completeThemes: {},
  lightMode: {},
  darkMode: {},
  selectedTheme: ""
};

const themeReducer = (state: object = initialThemeState, action: Action) => {
  switch (action.type) {
    case LOAD_THEMES:
      return {
        ...state,
        darkMode: action.payload.darkMode,
        lightMode: action.payload.lightMode,
        completeThemes: action.payload.completeThemes,
        selectedTheme: action.payload.selectedTheme
      };
    case UPDATE_SELECTED_THEME:
      return {
        ...state,
        selectedTheme: action.payload
      };
    default:
      return state;
  }
};

export default themeReducer;
