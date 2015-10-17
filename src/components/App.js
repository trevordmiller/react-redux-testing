import React from 'react';
import {connect} from 'react-redux';
import {addQuoteById} from '../state/quote/quoteActionCreators';
import AddQuote from './AddQuote';
import QuoteList from './QuoteList';
import {wrapper, container, well} from '../shared/styleGuide';

class App extends React.Component {

  render() {

    // These props are injected from the Redux store by react-redux's connect() method
    const {addQuoteById, quotes, theme} = this.props;

    return (
      <div style={wrapper}>
        <div style={{...container, ...well}}>
          <AddQuote addQuoteById={addQuoteById} />
        </div>
        <QuoteList
          style={{background: theme.color}}
          quotes={quotes}
        />
      </div>
    );
  }
}

App.propTypes = {
  addQuoteById: React.PropTypes.func.isRequired,
  quotes: React.PropTypes.array.isRequired,
  theme: React.PropTypes.object.isRequired
};

// Use react-redux's connect() method to specify how to map pieces of the store to the provided component's props
function select(state) {
  return {
    quotes: state.quotes,
    theme: state.theme
  };
}

export default connect(select, {addQuoteById})(App);
