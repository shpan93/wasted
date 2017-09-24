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
    case constants.SAVE_TRACKED_ACTIVITIES: {
      return {
        ...state,
        trackedActivites: action.payload,
      };
    }
    case constants.START_FETCH: {
      return {
        ...state,
        isFetching: true,
      };
    }
    case constants.STOP_FETCH: {
      return {
        ...state,
        isFetching: false,
      };
    }
    case constants.START_FETCH_CURRENT: {
      return {
        ...state,
        isFetchingCurrent: true,
      };
    }
    case constants.STOP_FETCH_CURRENT: {
      return {
        ...state,
        isFetchingCurrent: false,
      };
    }
    default:
      return state;
  }
};
