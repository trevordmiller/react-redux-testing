import React from 'react';
import Quote from './Quote';
import {container} from '../shared/styleGuide';

const QuoteList = (props) => {
  const quotes = props.quotes.map(quote => {
    return (
      <Quote
        key={quote.id}
        quote={quote}
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
  quotes: React.PropTypes.array.isRequired
};

export default QuoteList;
