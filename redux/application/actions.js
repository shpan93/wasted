import * as constants from './constants';

export function startStream() {
  return { type: constants.START_STREAM };
}

export function setNavigator(payload) {
  return { type: constants.SET_NAVIGATOR, payload };
}
