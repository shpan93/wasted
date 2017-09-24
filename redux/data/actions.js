import * as constants from './constants';
import { getGetRequest } from '../../utils/api';

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
      dispatch(saveActivities(activities.data));
      dispatch(saveCategories(categories.data));
    }).catch(e => {
      console.error(e);
    });
  };
}