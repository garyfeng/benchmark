import React, { forwardRef } from 'react';
import { Box } from 'rebass';

const Button = forwardRef((props, ref) => (
  <Box
    ref={ref}
    as="button"
    tx="buttons"
    variant="primary"
    {...props}
    __css={{
      px: 3,
      py: 2,
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffSet: 0
      }
    }}
  />
));

export default Button;
