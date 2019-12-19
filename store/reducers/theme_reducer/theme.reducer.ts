import {
  TOGGLE_DARKMODE,
  ADD_ALL_THEME_DATA
} from "../../types/theme_types/theme.types";
import { IAction } from "../../../shared/types/interfaces/redux/action.type";

const initialState = {
  isDarkModeEnabled: false,
  darkMode: {},
  lightMode: {}
};

export const themeReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_ALL_THEME_DATA:
      return {
        ...state,
        darkMode: action.payload.darkMode,
        lightMode: action.payload.lightMode
      };

    case TOGGLE_DARKMODE:
      return {
        ...state,
        isDarkModeEnabled: action.payload
      };

    default:
      return state;
  }
};
