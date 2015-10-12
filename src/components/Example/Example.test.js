import React from 'react/addons';
const {TestUtils} = React.addons;
import assert from 'assert';
import Example from './Example';

describe('Example', () => {

  const shallowRenderer = TestUtils.createRenderer();
  shallowRenderer.render(<Example someProp='hello world' />);
  const result = shallowRenderer.getRenderOutput();

  describe('default rendering', () => {

    it('should render the correct root element', () => {
      const actual = result.type;
      const expected = 'section';
      assert.equal(actual, expected);
    });

    it('should render the correct children', () => {
      const actual = result.props.children;
      const expected = 'hello world';
      assert.deepEqual(actual, expected);
    });
  });
});
