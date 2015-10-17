import React from 'react';
import Quote from './Quote';
import {container} from '../shared/styleGuide';

class Quotes extends React.Component {
  render() {
    const quotes = this.props.quotes.map(quote => {
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
  }
}

Quotes.propTypes = {
  quotes: React.PropTypes.array.isRequired
};

export default Quotes;
