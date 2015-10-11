export default function quoteReducer(state = {quotes: []}, action) {

  function changeLikeCountById(change) {
    const newQuotes = state.quotes
      .map(quote => {
        if(quote.id === action.payload.id) {
          switch (change) {
            case 'increment':
              quote.likeCount++;
              return quote;
            case 'decrement':
              if(quote.likeCount > 0) {
                quote.likeCount--;
              }
              return quote;
            default:
              return quote;
          }
        }
        return quote;
      });
    return newQuotes;
  }

  switch(action.type) {

    case 'ADD_QUOTE_BY_ID':
      return {
        quotes: state.quotes
          .concat(action.payload)
      };

    case 'REMOVE_QUOTE_BY_ID':
      return {
        quotes: state.quotes
          .filter(quote => quote.id !== action.payload.id)
      };

    case 'LIKE_QUOTE_BY_ID':
      return {
        quotes: changeLikeCountById('increment')
      };

    case 'UNLIKE_QUOTE_BY_ID':
      return {
        quotes: changeLikeCountById('decrement')
      };

    default:
      return state;
  }
}
