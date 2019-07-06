import { LOAD_THEMES } from "./../types/theme.types";

interface Themes {
  lightMode: object;
  darkMode: object;
}

export const loadThemesAction: any = (themes: Themes) => {
  console.log(themes);

  return (dispatch: any) => {
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
