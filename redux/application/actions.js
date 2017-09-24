import * as constants from './constants';
import navigateUi from '../../routes/routeMapping';
import { getPostRequest, getGetRequest } from '../../utils/api';

export function startStream() {
  return { type: constants.START_STREAM };
}

export function setNavigator(payload) {
  return { type: constants.SET_NAVIGATOR, payload };
}

export function navigate(route, animation) {
  return (_, getState) => {
    const navigator = getState().application.navigator;
    navigateUi(navigator, route, animation);
  };
}
