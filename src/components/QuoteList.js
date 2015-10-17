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
  likeQuoteById: React.PropTypes.func.isRequired
};

export default QuoteList;
