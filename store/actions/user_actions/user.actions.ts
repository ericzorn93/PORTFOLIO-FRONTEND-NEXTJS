import { USER_CONTACTED } from "../../types/user_types/user.types";

/**
 * @description
 * Toggle whether the user is contacted from the contact form in the store.
 * @param {Boolean} userContacted Flag to determine whether the user is contacted in the redux store.
 * @returns {void}
 */
export const contactUserAction = (userContacted: boolean) => (
  dispatch: Function
): void => {
  if (typeof userContacted !== "boolean") {
    return;
  }

  dispatch({
    type: USER_CONTACTED,
    payload: userContacted
  });
};
