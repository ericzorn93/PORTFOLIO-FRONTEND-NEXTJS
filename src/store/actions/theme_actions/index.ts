import { ThemeTypes } from "./../../types/theme_types/index";
import { ICombinedTheme } from "../../../utils/primary_interfaces/theme.interface";

export class ThemeActions {
  public static addAllThemeDataAction(themeData: ICombinedTheme): Function {
    return (dispatch: Function, getState: Function) => {
      const { allThemes } = getState().themes; // Used to retrieve the the theme data from the redux store

      if (!themeData) {
        return;
      } else if (themeData && Object.values(allThemes).length) {
        return;
      }

      dispatch({
        type: ThemeTypes.ADD_ALL_THEME_DATA,
        payload: {
          allThemes: themeData,
          lightMode: themeData.lightMode,
          darkMode: themeData.darkMode
        }
      });
    };
  }
}
