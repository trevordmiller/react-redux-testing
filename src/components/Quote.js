import React from 'react';
import {COLOR_FILL, container, cushion, subtle, alignRight, rounded} from '../shared/styleGuide';

const Quote = (props) => {
  const quote = props.quote;
  return (
    <div
      style={{
        ...container,
        ...cushion,
        ...rounded,
        background: COLOR_FILL
      }}
      key={quote.id}
    >
      <div style={cushion}>
        "{quote.text}"
      </div>
      <div style={{...subtle, ...alignRight}}>
        {quote.author}
      </div>
      <div style={{...subtle, ...alignRight}}>
        {quote.likeCount} likes
      </div>
    </div>
  );
};

Quote.propTypes = {
  quote: React.PropTypes.object.isRequired
};

export default Quote;
