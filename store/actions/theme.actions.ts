import { LOAD_THEMES } from "./../types/theme.types";

interface Themes {
  lightMode: object;
  darkMode: object;
}

export const loadThemesAction = async (themes: Themes) => {
  if (!Object.keys(themes).length) {
    return;
  }

  return (dispatch: Function) => {
    dispatch({
      type: LOAD_THEMES,
      payload: {
        lightMode: themes.lightMode,
        darkMode: themes.darkMode,
        selectedTheme: "darkMode"
      }
    });
  };
};
