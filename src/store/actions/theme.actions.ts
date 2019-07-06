import { LOAD_THEMES } from "./../types/theme.types";

interface Themes {
  lightMode: object;
  darkMode: object;
}

export const loadThemesAction: Function = (themes: Themes) => {
  return (dispatch: Function) => {
    console.log(themes);

    dispatch({
      type: LOAD_THEMES,
      payload: {
        lightMode: themes.lightMode,
        darkMode: themes.darkMode
      }
    });
  };
};
