import {UPDATE_THEME_COLOR} from '../ActionTypes';

export default function themeReducer(state = {color: '#EFEFEF'}, action) {
  switch (action.type) {
    case UPDATE_THEME_COLOR:
      return {
        color: action.payload.color
      };
    default:
      return state;
  }
}
