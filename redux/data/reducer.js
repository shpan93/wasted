import initialState from './initialState';
import * as constants from './constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SAVE_ACTIVITIES: {
      return {
        ...state,
        activities: action.payload,
      };
    }
    case constants.SAVE_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    default:
      return state;
  }
};
