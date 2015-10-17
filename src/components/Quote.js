import React from 'react';
import {COLOR_FILL, COLOR_WARNING, container, cushion, emphasis, subtle, alignRight, rounded} from '../shared/styleGuide';

class Quote extends React.Component {

  constructor() {
    super();
    this.state = {
      liked: false
    };
  }

  handleLikesClick() {
    this.setState({
      liked: !this.state.liked
    });
    const payload = {
      id: this.props.quote.id
    };
    this.state.liked
      ? this.props.likeQuoteById(payload)
      : this.props.unlikeQuoteById(payload);
  }

  handleRemoveClick() {
    const payload = {
      id: this.props.quote.id
    };
    this.props.removeQuoteById(payload);
  }

  render() {
    return (
      <div
        style={{
          ...container,
          ...cushion,
          ...rounded,
          background: COLOR_FILL
        }}
        key={this.props.quote.id}
      >
        <div style={emphasis}>
          "{this.props.quote.text}"
        </div>
        <div style={{...subtle, ...alignRight}}>
          <div>{this.props.quote.author}</div>
          <div>{this.props.quote.likeCount} likes</div>
            <div>
              <a
                style={{color: this.props.theme.color}}
                onClick={this.handleLikesClick.bind(this)}
              >
                {this.state.liked ? 'Unlike' : 'Like'}
              </a>
            </div>
            <div>
              <a
                style={{color: COLOR_WARNING}}
                onClick={this.handleRemoveClick.bind(this)}
              >
                Remove
              </a>
            </div>
        </div>
      </div>
    );
  }
}

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired,
  removeQuoteById: React.PropTypes.func.isRequired,
  likeQuoteById: React.PropTypes.func.isRequired,
  unlikeQuoteById: React.PropTypes.func.isRequired,
  theme: React.PropTypes.object.isRequired
};

export default Quote;
