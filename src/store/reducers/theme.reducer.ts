import Action from "../interfaces/action.interface";

const initialThemeState = {
  darkMode: {},
  lightMode: {}
};

const themeReducer = (state: object = initialThemeState, action: Action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default themeReducer;
