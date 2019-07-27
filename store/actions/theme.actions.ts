import { IThemes } from "./../../utils/interfaces/theme.interface";
import { LOAD_THEMES } from "./../types/theme.types";

export const loadThemesAction = (themes: IThemes, selectedTheme: string) => {
  console.log("theme action called");

  return (dispatch: Function) => {
    dispatch({
      type: LOAD_THEMES,
      payload: {
        lightMode: themes.lightMode,
        darkMode: themes.darkMode,
        selectedTheme: selectedTheme || "darkMode",
        completeThemes: themes
      }
    });
  };
};
