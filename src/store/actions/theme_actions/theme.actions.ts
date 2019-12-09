import { TOGGLE_DARKMODE } from '../../types/theme_types/theme.types';

/**
 * @description
 * Toggles in local storage and the redux store if dark mode is enabled or not.
 * @param {Boolean} isDarkModeEnabled Toggles whether the dark mode is enabled in the store
 */
export const toggleDarkModeEnabledAction = (isDarkModeEnabled: boolean) => (
  dispatch: Function
) => {
  if (isDarkModeEnabled == null) {
    return;
  }

  localStorage.setItem('darkModeEnabled', JSON.stringify(isDarkModeEnabled));

  dispatch({
    type: TOGGLE_DARKMODE,
    payload: isDarkModeEnabled,
  });
};
