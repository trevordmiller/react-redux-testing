import React from 'react';
import 'react-colors-picker/assets/index.css';
import ColorPicker from 'react-colors-picker';
import {corner} from '../shared/styleGuide';

const ThemeSelect = (props) => {

  function handleColorChange(selection) {
    const payload = {
      color: selection.color
    };
    props.updateThemeColor(payload);
  }

  return (
    <div style={corner}>
      <ColorPicker
        defaultColor={props.theme.color}
        onChange={handleColorChange}
      />
    </div>
  );
};

ThemeSelect.propTypes = {
  theme: React.PropTypes.object.isRequired,
  updateThemeColor: React.PropTypes.func.isRequired
};

export default ThemeSelect;
