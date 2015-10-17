import React from 'react';
import {COLOR_FILL, container, cushion, emphasis, subtle, alignRight, rounded} from '../shared/styleGuide';

const Quote = (props) => {

  function handleButtonClick() {
    const payload = {
      id: props.quote.id
    };
    props.likeQuoteById(payload);
  }

  return (
    <div
      style={{
        ...container,
        ...cushion,
        ...rounded,
        background: COLOR_FILL
      }}
      key={props.quote.id}
    >
      <div style={emphasis}>
        "{props.quote.text}"
      </div>
      <div style={{...subtle, ...alignRight}}>
        <div>{props.quote.author}</div>
        <div>{props.quote.likeCount} likes</div>
          <a
            style={{color: props.theme.color}}
            onClick={handleButtonClick}
          >
            Like
          </a>
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired,
  theme: React.PropTypes.object.isRequired
};

export default Quote;
