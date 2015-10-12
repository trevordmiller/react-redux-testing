import React from 'react';
import {connect} from 'react-redux';
import {addQuoteById} from '../../state/quote/quoteActionCreators';
import Quotes from '../Quotes/Quotes';

class App extends React.Component {

  render() {

    // Injected by react-redux's connect()
    const {dispatch, quotes, theme} = this.props;

    return (
      <section>
        <Quotes style={{background: theme.color}} quotes={quotes} />
        <button onClick={quote => dispatch(addQuoteById(quote))}>Add quote</button>
      </section>
    );
  }
}

App.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  quotes: React.PropTypes.array.isRequired,
  theme: React.PropTypes.object.isRequired
};

function select(state) {
  return {
    quotes: state.quotes,
    theme: state.theme
  };
}

export default connect(select)(App);
