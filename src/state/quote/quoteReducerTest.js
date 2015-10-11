import assert from 'assert';
import quoteReducer from './quoteReducer';

describe('quoteReducer', () => {

  function stateMock() {
    return {
      quotes: [
        {
          text: 'Lorem ipsum',
          author: 'Jane Doe',
          id: 1,
          likeCount: 7
        },
        {
          text: 'Ullamco laboris nisi ut aliquip',
          author: 'John Smith',
          id: 2,
          likeCount: 0
        }
      ]
    };
  }

  it('should add quotes by id', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'ADD_QUOTE_BY_ID',
      payload: {
        text: 'This is a new quote',
        author: 'Someone awesome',
        id: 3,
        likeCount: 0
      }
    });
    const expected = {
      quotes: [
        {
          text: 'Lorem ipsum',
          author: 'Jane Doe',
          id: 1,
          likeCount: 7
        },
        {
          text: 'Ullamco laboris nisi ut aliquip',
          author: 'John Smith',
          id: 2,
          likeCount: 0
        },
        {
          text: 'This is a new quote',
          author: 'Someone awesome',
          id: 3,
          likeCount: 0
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('should remove quotes by id', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'REMOVE_QUOTE_BY_ID',
      payload: {
        id: 1
      }
    });
    const expected = {
      quotes: [
        {
          text: 'Ullamco laboris nisi ut aliquip',
          author: 'John Smith',
          id: 2,
          likeCount: 0
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('should return prevous state when trying to remove quote with a non-existant id', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'REMOVE_QUOTE_BY_ID',
      payload: {
        id: 521
      }
    });
    const expected = stateMock();
    assert.deepEqual(actual, expected);
  });

  it('should increase quote like count by id', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'LIKE_QUOTE_BY_ID',
      payload: {
        id: 2
      }
    });
    const expected = {
      quotes: [
        {
          text: 'Lorem ipsum',
          author: 'Jane Doe',
          id: 1,
          likeCount: 7
        },
        {
          text: 'Ullamco laboris nisi ut aliquip',
          author: 'John Smith',
          id: 2,
          likeCount: 1
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('should decrease quote like count by id', () => {

    const actual = quoteReducer(stateMock(), {
      type: 'UNLIKE_QUOTE_BY_ID',
      payload: {
        id: 1
      }
    });
    const expected = {
      quotes: [
        {
          text: 'Lorem ipsum',
          author: 'Jane Doe',
          id: 1,
          likeCount: 6
        },
        {
          text: 'Ullamco laboris nisi ut aliquip',
          author: 'John Smith',
          id: 2,
          likeCount: 0
        }
      ]
    };
    assert.deepEqual(actual, expected);
  });

  it('should return previous state when trying to make a quote like count negative', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'UNLIKE_QUOTE_BY_ID',
      payload: {
        id: 2
      }
    });
    const expected = stateMock();
    assert.deepEqual(actual, expected);
  });

  it('should return prevous state when trying to change the like count on a quote with a non-existant id', () => {
    const actual = quoteReducer(stateMock(), {
      type: 'UNLIKE_QUOTE_BY_ID',
      payload: {
        id: 241
      }
    });
    const expected = stateMock();
    assert.deepEqual(actual, expected);
  });
});
