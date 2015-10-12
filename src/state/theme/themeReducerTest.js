import assert from 'assert';
import {updateThemeColor} from './themeActionCreators';
import themeReducer from './themeReducer';

describe('themeReducer', () => {

  function stateMock() {
    return {
      color: '#A3BE89'
    };
  }

  it('should change the theme color', () => {
    const actual = themeReducer(stateMock(), updateThemeColor({
      color: '#B38EAE'
    }));
    const expected = {
      color: '#B38EAE'
    };
    assert.deepEqual(actual, expected);
  });
});
