import {IReduxAction} from "../../../../types/redux_types";

interface IThemeState {
  allThemes: object[],
  darkMode: object,
  lightMode: object,
}

const initialState = {
  allThemes: [],
  darkMode: {},
  lightMode: {}
};

const themesReducer = (state: IThemeState = initialState,  action: IReduxAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default themesReducer;
