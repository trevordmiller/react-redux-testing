import React from 'react';
import {container} from '../shared/styleGuide';
import Quote from './Quote';

const QuoteList = (props) => {
  const quotes = props.quotes.map(quote => {
    return (
      <Quote
        theme={props.theme}
        key={quote.id}
        quote={quote}
        likeQuoteById={props.likeQuoteById}
        unlikeQuoteById={props.unlikeQuoteById}
        removeQuoteById={props.removeQuoteById}
      />
    );
  });
  return (
    <div style={container}>
      {quotes}
    </div>
  );
};

QuoteList.propTypes = {
  quotes: React.PropTypes.array.isRequired,
  removeQuoteById: React.PropTypes.func.isRequired,
  likeQuoteById: React.PropTypes.func.isRequired,
  unlikeQuoteById: React.PropTypes.func.isRequired,
  theme: React.PropTypes.object.isRequired
};

export default QuoteList;
