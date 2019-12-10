import React from 'react';
import PropTypes from 'prop-types';
import { useRovingTabIndex, useFocusEffect } from 'react-roving-tabindex';
import { Box } from '../Base';

function Button({ disabled, roving = false, ...props }) {
  const ref = React.useRef(null);
  const [tabIndex, focused, handleKeyDown, handleClick] = useRovingTabIndex(
    ref,
    disabled
  );
  useFocusEffect(focused, ref);
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
      ref={ref}
      tabIndex={roving ? tabIndex : undefined}
      disabled={disabled}
      onKeyDown={handleKeyDown}
      onClick={handleClick}
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
