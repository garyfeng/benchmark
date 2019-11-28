import React from 'react';
import { Box } from './Box.js';

function Switch({ checked, ...props }) {
  return (
    <Box
      as="button"
      type="button"
      role="switch"
      aria-checked={checked}
      {...props}
      sx={{
        appearance: 'none',
        m: 0,
        p: 0,
        width: 64,
        height: 32,
        color: 'primary',
        cursor: 'pointer',
        bg: 'primary',
        border: '2',
        borderColor: 'primary',
        borderRadius: 'full',
        ':focus': {
          outline: '1px dotted',
          outlineColor: 'black',
          outlineOffset: 2
        }
      }}
    >
      <Box
        aria-hidden
        style={{
          transform: checked ? 'translateX(28px)' : 'translateX(0)'
        }}
        sx={{
          mt: '0px',
          ml: '4px',
          width: 24,
          height: 24,
          borderRadius: '50%',
          border: '1px solid',
          boxShadow: 'sm',
          borderColor: 'primary',
          bg: 'white',
          transitionProperty: 'transform',
          transitionTimingFunction: 'ease-out',
          transitionDuration: '0.1s'
        }}
      />
    </Box>
  );
}

export default Switch;
