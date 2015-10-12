import React from 'react';


const styles = {
  quote: {
    margin: '0 0 2rem',
    padding: '1rem'
  },
  quoteText: {
    margin: '0 0 1rem',
    fontFamily: 'sans-serif'
  },
  author: {
    margin: '0',
    fontFamily: 'sans-serif',
    color: 'rgba(0, 0, 0, .5)',
    textAlign: 'right'
  },
  likeCount: {
    margin: '0',
    fontFamily: 'sans-serif',
    textAlign: 'right'
  }
};

class Quote extends React.Component {
  render() {
    const quote = this.props.quote;
    return (
      <section style={styles.quote} key={quote.id}>
        <blockquote style={styles.quoteText}>
          "{quote.text}"
        </blockquote>
        <p style={styles.author}>{quote.author}</p>
        <p style={styles.likeCount}>{quote.likeCount} likes</p>
      </section>
    );
  }
}

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired
};

export default Quote;
