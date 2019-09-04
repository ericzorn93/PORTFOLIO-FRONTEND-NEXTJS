import { IReduxAction } from './../../../../types/redux_types/index';
import { MenuBarTypes } from '../../types/menu_bar_types';

interface IMenuBarState {
  isOpen: boolean;
}

const initialState: IMenuBarState = {
  isOpen: false,
};

const menuBarReducer = (
  state: IMenuBarState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    case MenuBarTypes.TOGGLE_MENU_BAR_OPEN:
      return {
        ...state,
        isOpen: action.payload,
      };
    default:
      return state;
  }
};

export default menuBarReducer;
