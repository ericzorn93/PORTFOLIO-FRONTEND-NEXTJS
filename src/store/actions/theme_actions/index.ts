import { ThemeNamesEnum } from './../../../utils/primary_enums/theme.enum';
import { ThemeTypes } from './../../types/theme_types/index';
import { ICombinedTheme } from '../../../utils/primary_interfaces/theme.interface';

export class ThemeActions {
  /**
   * @description Adds all theme data to the redux store that has a combined
   * theme object of darkMode and light mode;
   */
  public static addAllThemeDataAction(themeData: ICombinedTheme): Function {
    return (dispatch: Function, getState: Function) => {
      const {
        allThemes: { darkMode, lightMode },
      } = getState().themes; // Used to retrieve the the theme data from the redux store

      if (!themeData) {
        return;
      } else if (
        Object.values(darkMode).length ||
        Object.values(lightMode).length
      ) {
        return;
      }

      dispatch({
        type: ThemeTypes.ADD_ALL_THEME_DATA,
        payload: {
          allThemes: themeData,
          lightMode: themeData.lightMode,
          darkMode: themeData.darkMode,
          currentThemeName: ThemeNamesEnum.darkMode,
        },
      });
    };
  }

  /**
   * @description Updates the current theme in the redux store, based on the the theme selected
   */
  public static updateCurrentThemeAction(
    newThemeName: ThemeNamesEnum
  ): Function {
    return (dispatch: Function) => {
      if (
        newThemeName !== ThemeNamesEnum.darkMode &&
        newThemeName !== ThemeNamesEnum.lightMode
      ) {
        return;
      }

      dispatch({
        type: ThemeTypes.UPDATE_CURRENT_THEME,
        payload: newThemeName,
      });
    };
  }
}
