import * as constants from './constants';
import { getGetRequest, getPostRequest } from '../../utils/api';

export function saveActivities(payload) {
  return { type: constants.SAVE_ACTIVITIES , payload};
}

export function saveCategories(payload) {
  return { type: constants.SAVE_CATEGORIES, payload };
}

export function getCategoriesAndActivities() {
  return (dispatch) => {
    const getActivities = getGetRequest('activities');
    const getCategories = getGetRequest('categories');

    Promise.all([getActivities, getCategories]).then(([activities, categories]) => {
      dispatch(saveCategories(categories.data));
      dispatch(saveActivities(activities.data));
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
