import * as constants from './constants';
import { getGetRequest, getPostRequest } from '../../utils/api';

export function saveActivities(payload) {
  return { type: constants.SAVE_ACTIVITIES , payload};
}

export function saveCategories(payload) {
  return { type: constants.SAVE_CATEGORIES, payload };
}

export function saveTrackedActivities(payload) {
  return { type: constants.SAVE_TRACKED_ACTIVITIES, payload };
}

export function getCategoriesAndActivities() {
  return (dispatch) => {
    const getActivities = getGetRequest('activities');
    const getCategories = getGetRequest('categories');
    dispatch({ type: constants.START_FETCH });
    Promise.all([getActivities, getCategories]).then(([activities, categories]) => {
      dispatch(saveCategories(categories.data));
      dispatch(saveActivities(activities.data));
      dispatch({ type: constants.STOP_FETCH });
    }).catch(e => {
      console.error(e);
    });
  };
}

export function addActivity(payload) {
  return (dispatch) => {
    getPostRequest('activities', payload).then(() => {
      dispatch({ type: constants.ADD_ACTIVITY });
      dispatch(getCategoriesAndActivities());
    });
  };
}

export function getTrackedActivities(cb) {
  return (dispatch, getState) => {
    dispatch({ type: constants.START_FETCH_CURRENT });
    const userId = parseInt(getState().user.userId, 10);
    getPostRequest('trackedActivity/get', { userId }).then((data) => {
      dispatch(saveTrackedActivities(data.data));
      dispatch({ type: constants.STOP_FETCH_CURRENT });
      cb(data.data);
    });
  };
}

export function finishActivities(payload, cb) {
  return (dispatch) => {
    dispatch({ type: constants.START_FETCH_CURRENT });
    getPostRequest('trackedActivity/finish', { id: payload.id }).then(() => {
      dispatch({ type: constants.STOP_FETCH_CURRENT });
      cb(payload);
    });
  };
}
