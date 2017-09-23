/**
 * Created by anton on 6/17/17.
 */
import { getPostRequest } from '../../utils/api' ;

export function register(body) {
  return (dispatch) => {
    return getPostRequest('users/register', body).then(() => {
      dispatch();
    });
  };
}

export function login(body) {
  return (dispatch) => {
    return getPostRequest('users/login', body).then(() => {
      dispatch();
    });
  };
}

