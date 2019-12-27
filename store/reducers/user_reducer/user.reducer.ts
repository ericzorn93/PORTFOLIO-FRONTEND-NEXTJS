import { IAction } from "./../../../shared/types/interfaces/redux/action.type";
import { USER_CONTACTED } from "../../types/user_types/user.types";

const initialState = {
  isUserContacted: false
};

export const userReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case USER_CONTACTED:
      return {
        ...state,
        isUserContacted: action.payload
      };

    default:
      return state;
  }
};
