import { IReduxAction } from './../../../../types/redux_types/index';
import { UserAgentTypes } from '../../types/user_agent_types';

interface UserAgentState {
  agent: object;
  isDevice: boolean;
  browserIsIE: boolean;
}

const initialState: UserAgentState = {
  agent: {},
  isDevice: false,
  browserIsIE: false,
};

const userAgentReducer = (
  state: UserAgentState = initialState,
  action: IReduxAction
) => {
  switch (action.type) {
    case UserAgentTypes.ADD_USER_AGENT_DATA:
      return {
        ...state,
        agent: action.payload.agent,
        isDevice: action.payload.isDevice,
        browserIsIe: action.payload.browserIsIE,
      };
    default:
      return state;
  }
};

export default userAgentReducer;
