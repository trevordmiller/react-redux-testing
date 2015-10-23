import React from 'react';

const Icon = (props) => {
  return (
    <i style={{fontSize: FONT_SIZE_LARGE}} className={`fa fa-${props.name}`}></i>
  );
};

Icon.propTypes = {
  name: React.PropTypes.string.isRequired
};

export default Icon;
