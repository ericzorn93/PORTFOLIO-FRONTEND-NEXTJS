import { UserAgentTypes } from '../../types/user_agent_types';

export class UserAgentActions {
  /**
   * @description
   * Load initial user agent data to the redux store and determine if user agent isDevice (mobile)
   */
  public static loadInitialUserAgentAction(userAgent: any): Function {
    return (dispatch: Function) => {
      const agent = userAgent;

      let isDevice: boolean;
      if (
        userAgent.device &&
        userAgent.device.vendor &&
        userAgent.device.model &&
        userAgent.device.type
      ) {
        isDevice = true;
      } else {
        isDevice = false;
      }

      const browserIsIe =
        userAgent.browser.name.toLowerCase() === 'ie' ||
        userAgent.browser.name.toLowerCase() === 'internet explorer';

      // Combined payload
      const payload = { agent, isDevice, browserIsIe };

      dispatch({
        type: UserAgentTypes.ADD_USER_AGENT_DATA,
        payload,
      });
    };
  }
}
