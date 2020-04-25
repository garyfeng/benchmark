import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';

function Switch({ checked = false, onClick, ...props }) {
  return (
    <Box
      as="button"
      type="button"
      role="switch"
      aria-checked={checked}
      bg="p.500"
      color="p.500"
      border="2"
      borderRadius="full"
      m="0"
      p="0"
      width="64px"
      height="30px"
      onClick={onClick}
      {...props}
      sx={{
        cursor: 'pointer',
        ':focus': {
          outline: '1px dotted',
          outlineColor: 'black',
          outlineOffset: 2
        },
        ':disabled': {
          pointerEvents: 'none',
          opacity: '.3'
        }
      }}
    >
      <Box
        aria-hidden
        width="24px"
        height="24px"
        borderRadius="full"
        ml="2px"
        boxShadow="md"
        bg="white"
        style={{
          transform: checked ? 'translateX(32px)' : 'translateX(0)'
        }}
        sx={{
          transitionProperty: 'transform',
          transitionDuration: '0.25s'
        }}
      />
    </Box>
  );
}

Switch.propTypes = {
  checked: PropTypes.bool,
  onClick: PropTypes.func
};

export default Switch;
