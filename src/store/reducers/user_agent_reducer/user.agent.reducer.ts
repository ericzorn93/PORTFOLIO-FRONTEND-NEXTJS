import { IReduxAction } from './../../../../types/redux_types/index';

interface UserAgentState {
  agent: object;
  isDevice: boolean;
}

const initialState: UserAgentState = {
  agent: {},
  isDevice: false,
};

const userAgentReducer = (
  state: UserAgentState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userAgentReducer;
