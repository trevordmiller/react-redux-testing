import React from 'react';
import Quote from '../Quote/Quote';

class Quotes extends React.Component {
  render() {
    const quotes = this.props.quotes.map(quote => {
      return (
        <Quote key={quote.id} quote={quote} />
      );
    });
    return (
      <main>
        {quotes}
      </main>
    );
  }
}

Quotes.propTypes = {
  quotes: React.PropTypes.array.isRequired
};

export default Quotes;
