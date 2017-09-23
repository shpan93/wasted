import initialState from './initialState';
import * as constants from './constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_USER_ID: {
      return {
        ...state,
        userId: action.payload,
      };
    }
    default:
      return state;
  }
};
