import { MenuBarTypes } from './../../types/menu_bar_types/index';

export class MenuBarActions {
  /**
   * @description Toggles whether the menu bar is open or not in the redux store
   */
  public static toggleMenuBarOpenAction(menuBarOpen: boolean): Function {
    return (dispatch: Function) => {
      dispatch({
        type: MenuBarTypes.TOGGLE_MENU_BAR_OPEN,
        payload: menuBarOpen,
      });
    };
  }
}
