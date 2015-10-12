import {store} from './state/store';
import {addQuoteById, removeQuoteById, likeQuoteById, unlikeQuoteById} from './state/quote/quoteActionCreators';
import {updateThemeColor} from './state/theme/themeActionCreators';

store.subscribe(() => {
  const newState = store.getState();
  console.log(`
    NEW STATE:
    ${JSON.stringify(newState, null, 2)}
  `);
});

store.dispatch(updateThemeColor({
  color: '#E7CC87'
}));

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

store.dispatch(updateThemeColor({
  color: '#777777'
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
