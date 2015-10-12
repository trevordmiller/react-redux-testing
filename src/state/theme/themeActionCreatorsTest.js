import assert from 'assert';
import {UPDATE_THEME_COLOR} from '../ActionTypes';
import {updateThemeColor} from './themeActionCreators';

describe('theme actions and action creators', () => {

  describe('updateThemeColor', () => {

    it('should create correct actions', () => {
      const examplePayload = {
        color: '#333333'
      };
      const actual = updateThemeColor(examplePayload);
      const expected = {
        type: UPDATE_THEME_COLOR,
        payload: examplePayload
      };
      assert.deepEqual(actual, expected);
    });
  });
});
