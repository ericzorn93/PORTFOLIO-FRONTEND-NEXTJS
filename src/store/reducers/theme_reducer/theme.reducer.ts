import { TOGGLE_DARKMODE } from '../../types/theme_types/theme.types';
import { IAction } from '../../../utils/types/interfaces/redux/action.type';

const initialState = {
  isDarkModeEnabled: false,
};

export const themeReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return {
        ...state,
        isDarkModeEnabled: action.payload,
      };

    default:
      return state;
  }
};
