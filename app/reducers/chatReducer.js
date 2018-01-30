/* chat reducer */

import * as ActionTypes from '../constants/ActionTypes';
import initialState from './initialState';

/* export reducer */
export default  (state = initialState.chats, action) => {
  switch (action.type) {
    case ActionTypes.LOAD_CHAT_SUCCESS:
      return action.chats;
      break;
    default:
      return state;
  }
}
