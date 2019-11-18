import React, { forwardRef } from 'react';
import styled from '@emotion/styled';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';
import {
  space,
  color,
  border,
  fontSize,
  layout,
  flexbox,
  width,
  fontWeight,
  lineHeight
} from 'styled-system';

export { EmotionThemeProvider as ThemeProvider };

export const Box = styled('div')`
  ${color}
  ${border}
  ${space}
  ${flexbox}
  ${width}
  ${fontSize}
  ${layout}
`;

Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...fontSize.propTypes,
  ...color.propTypes
};

export const Text = styled('div')`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
`;

Text.propTypes = {
  ...space.propTypes,
  ...fontSize.propTypes,
  ...fontWeight.propTypes,
  ...lineHeight.propTypes,
  ...color.propTypes
};

export const Flex = styled(Box)({
  display: 'flex'
});

export default Box;
