import React from 'react';
import {cushion, button, input} from '../shared/styleGuide';
import createUniqueId from '../shared/createUniqueId';

class AddQuote extends React.Component {

  handleButtonClick() {
    const textNode = this.refs.text;
    const authorNode = this.refs.author;
    const payload = {
      text: textNode.value.trim(),
      author: authorNode.value.trim(),
      id: createUniqueId(),
      likeCount: 0
    };
    this.props.addQuoteById(payload);
    textNode.value = '';
    authorNode.value = '';
  }

  render() {

    return (
      <div>
        <textarea
          style={{...cushion, ...input}}
          ref='text'
          placeholder='Quote'
        >
        </textarea>
        <input
          style={{...cushion, ...input}}
          ref='author'
          placeholder='Author'
        >
        </input>
        <a
          style={button}
          onClick={this.handleButtonClick.bind(this)}>
          Add Quote
        </a>
      </div>
    );
  }
}

AddQuote.propTypes = {
  addQuoteById: React.PropTypes.func.isRequired
};

export default AddQuote;
