import { LOAD_THEMES } from "./../types/theme.types";
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
    default:
      return state;
  }
};

export default themeReducer;
