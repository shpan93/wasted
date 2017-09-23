import * as constants from './constants';

export function startStream() {
  return { type: constants.START_STREAM };
}
