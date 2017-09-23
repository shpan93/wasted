import initialState from './initialState';
import * as constants from './constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_FRIENDS: {
      return Object.assign({}, { friends: action.payload });
    }
    default:
      return state;
  }
};
