import styled from '@emotion/styled';
import css, { get } from '@styled-system/css';
import shouldForwardProp from '@styled-system/should-forward-prop';
import {
  compose,
  grid,
  space,
  color,
  border,
  typography,
  shadow,
  layout,
  flexbox,
  width
} from 'styled-system';

const sx = props => css(props.sx)(props.theme);
const base = props => css(props.__css)(props.theme);
const variant = ({ theme, variant, tx = 'variants' }) =>
  css(get(theme, tx + '.' + variant, get(theme, variant)))(theme);

export const Box = styled('div', {
  shouldForwardProp
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0
  },
  base,
  variant,
  props => props.css,
  compose(space, layout, shadow, border, width, color, flexbox),
  sx
);

export const Text = styled(Box)`
  display: inline;
  ${typography};
  ${layout};
`;

export const Bare = styled('div')(sx);

export const Flex = styled(Box)({
  display: 'flex'
});

export const Grid = styled(Box)({
  grid,
  display: 'grid'
});

export default Box;
