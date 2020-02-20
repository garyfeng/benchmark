import React from 'react';
import { Box } from '../Base';

const thumb = {
  appearance: 'none',
  width: 28,
  height: 28,
  bg: 'primary',
  border: 0,
  borderRadius: 9999,
  transition: 'width .2s, height .2s',
  ':active': {
    width: 34,
    height: 34
  }
};

function Slider({ ...props }) {
  return (
    <Box
      as="input"
      type="range"
      variant="slider"
      step="any"
      {...props}
      sx={{
        display: 'block',
        width: '100%',
        height: 14,
        my: 2,
        cursor: 'ew-resize',
        appearance: 'none',
        borderRadius: 9999,
        color: 'inherit',
        bg: 'n.50',
        border: 1,
        borderColor: 'n.600',
        ':focus': {
          outline: 'none',
          color: 'primary'
        },
        '&::-webkit-slider-thumb': thumb,
        '&::-moz-range-thumb': thumb,
        '&::-ms-thumb': thumb
      }}
    />
  );
}

export default Slider;
