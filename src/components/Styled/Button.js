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
      px: 4,
      py: 2,
      alignItems: 'center',
      display: 'inline-flex',
      cursor: 'pointer',
      transition: 'background .2s,border .2s,box-shadow .2s,color .2s',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffSet: 0
      }
    }}
  />
));

export default Button;
