import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box.js';

function Button(props) {
  return (
    <Box
      as="button"
      tx="buttons"
      variant="primary"
      __css={{
        px: 3,
        py: 2,
        alignItems: 'center',
        display: 'inline-flex',
        cursor: 'pointer',
        transition: 'background .2s,border .2s,box-shadow .2s,color .2s',
        ':focus': {
          outline: '1px dotted',
          outlineColor: 'black',
          outlineOffset: 2
        },
        ':disabled': {
          pointerEvents: 'none',
          bg: 'n.300',
          color: 'n.600',
          boxShadow: 'none'
        }
      }}
      {...props}
    />
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'prev',
    'next',
    'toolbar',
    'toolbarActive'
  ])
};

export default Button;
