import * as constants from './constants';
import { getPostRequest } from '../../utils/api';

export function addFriend(friendName) {
  return (dispatch, getState) => {
    return getPostRequest('friends',
      { userId: parseInt(getState().user.userId, 10), friendName }).then(() => {
        dispatch({ type: constants.FRIEND_ADDED });
        dispatch(fetchFriends());
      });
  };
}

export function fetchFriends() {
  return (dispatch, getState) => {
    return getPostRequest('friends/get',
      { userId: parseInt(getState().user.userId, 10) }).then((result) => {
        dispatch({ type: constants.FETCH_FRIENDS, payload: result.data });
      });
  };
}

