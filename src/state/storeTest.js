import assert from 'assert';
import {store} from './store';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from './quote/quoteActionCreators';

describe('store', () => {

  it('should have the correct state after a series of actions', () => {

    store.dispatch(addQuoteById({
      text: 'The best way to cheer yourself up is to try to cheer somebody else up.',
      author: 'Mark Twain',
      id: 1,
      likeCount: 24
    }));

    store.dispatch(addQuoteById({
      text: 'Whatever you are, be a good one.',
      author: 'Abraham Lincoln',
      id: 2,
      likeCount: 0
    }));

    store.dispatch(addQuoteById({
      text: 'The more I learn, the more I learn how little I know.',
      author: 'Socrates',
      id: 3,
      likeCount: 0
    }));

    store.dispatch(removeQuoteById({
      id: 2
    }));

    store.dispatch(likeQuoteById({
      id: 3
    }));

    store.dispatch(unlikeQuoteById({
      id: 1
    }));

    const actual = store.getState();
    const expected = {
      quotes: [
        {
          text: 'The best way to cheer yourself up is to try to cheer somebody else up.',
          author: 'Mark Twain',
          id: 1,
          likeCount: 23
        },
        {
          text: 'The more I learn, the more I learn how little I know.',
          author: 'Socrates',
          id: 3,
          likeCount: 1
        }
      ]
    };

    assert.deepEqual(actual, expected);
  });
});
