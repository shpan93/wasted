import initialState from './initialState';
import * as constants from './constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.START_STREAM: {
      return state;
    }
    case constants.SET_NAVIGATOR: {
      return state;
    }
    default:
      return state;
  }
};
