import {UPDATE_THEME_COLOR} from '../ActionTypes';

// Action creators
// Create individual action objects

export function updateThemeColor(payload) {
  return {
    type: UPDATE_THEME_COLOR,
    payload: payload
  };
}
