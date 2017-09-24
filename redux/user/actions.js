/**
 * Created by anton on 6/17/17.
 */
import * as constants from './constants';
import { getPostRequest, getGetRequest } from '../../utils/api' ;
import navigate from '../../routes/routeMapping';

export function register(body) {
  return (dispatch) => {
    return getPostRequest('users', body).then(() => {

    });
  };
}

export function login(body) {
  return (dispatch, getState) => {
    return getPostRequest('users/login', body).then(({ data }) => {
      console.log(data);
      dispatch(saveUserId(data.id));
      localStorage.setItem('userId', data.id);
    });
  };
}

export function startActivity(activityId) {
  return (dispatch, getState) => {
    const userId = getState().user.userId || 1;
    return getPostRequest('trackedActivity', {
      activityId: parseInt(activityId, 10),
      userId,
      position: '',
    }).then(({ data }) => {
      console.log(data);
    });
  };
}

export function logout() {
  return (dispatch, getState) => {
    return getGetRequest('users/logout').then(({ data }) => {
      console.log(data);
      localStorage.removeItem('userId');
    });
  };
}

export function saveUserId(payload) {
  return { type: constants.SAVE_USER_ID, payload };
}
