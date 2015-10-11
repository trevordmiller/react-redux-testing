import {store} from './state/store';

store.subscribe(() => {
  const newState = store.getState();
  console.log(`
    NEW STATE:
    ${JSON.stringify(newState, null, 2)}
  `);
});

store.dispatch({
  type: 'ADD_QUOTE_BY_ID',
  payload: {
    text: 'The best way to cheer yourself up is to try to cheer somebody else up.',
    author: 'Mark Twain',
    id: 1,
    likeCount: 24
  }
});

store.dispatch({
  type: 'ADD_QUOTE_BY_ID',
  payload: {
    text: 'Whatever you are, be a good one.',
    author: 'Abraham Lincoln',
    id: 2,
    likeCount: 0
  }
});

store.dispatch({
  type: 'ADD_QUOTE_BY_ID',
  payload: {
    text: 'The more I learn, the more I learn how little I know.',
    author: 'Socrates',
    id: 3,
    likeCount: 0
  }
});

store.dispatch({
  type: 'REMOVE_QUOTE_BY_ID',
  payload: {
    id: 2
  }
});

store.dispatch({
  type: 'LIKE_QUOTE_BY_ID',
  payload: {
    id: 3
  }
});

store.dispatch({
  type: 'UNLIKE_QUOTE_BY_ID',
  payload: {
    id: 1
  }
});
