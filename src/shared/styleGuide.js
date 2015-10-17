export const COLOR_FILL = '#FFFFFF';
export const COLOR_LIGHT_WHITE = 'rgba(255, 255, 255, 0.5)';
export const COLOR_LIGHT_BLACK = 'rgba(0, 0, 0, .5)';
export const COLOR_LIGHT_GRAY = '#EEEEEE';
export const SPACING_MEDIUM = '1rem';
export const SPACING_SMALL = '0.7rem';
export const FONT_SIZE_SMALL = '0.8rem';
export const BORDER_RADIUS_MEDIUM = '7px';

export const wrapper = {
  background: COLOR_LIGHT_GRAY,
  minHeight: '100vh'
};

export const container = {
  padding: SPACING_MEDIUM
};

export const cushion = {
  marginBottom: SPACING_MEDIUM
};

export const well = {
  background: 'rgba(93, 196, 198, 1.0)'
};

export const rounded = {
  borderRadius: BORDER_RADIUS_MEDIUM
};

export const verticalAlignmentFix = {
  verticalAlign: 'middle'
};

export const input = {
  border: '0',
  width: '100%',
  maxWidth: '100%',
  padding: `${SPACING_SMALL} ${SPACING_MEDIUM}`,
  fontSize: FONT_SIZE_SMALL,
  ...rounded,
  ...verticalAlignmentFix
};

export const button = {
  background: COLOR_LIGHT_WHITE,
  color: COLOR_LIGHT_BLACK,
  padding: `${SPACING_SMALL} ${SPACING_MEDIUM}`,
  display: 'block',
  textAlign: 'center',
  ...rounded
};

export const subtle = {
  color: COLOR_LIGHT_BLACK
};

export const alignRight = {
  textAlign: 'right'
};
