import React from 'react';
import {container} from '../shared/styleGuide';
import Quote from './Quote';

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
