import React from 'react';

const VisuallyHidden = props => (
  <span
    style={{
      // https://accessible360.com/accessible360-blog/use-aria-label-screen-reader-text/
      position: 'absolute',
      height: '1px',
      width: '1px',
      clipPath: 'polygon(0px 0px, 0px 0px, 0px 0px)',
      overflow: 'hidden !important',

      // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
      whiteSpace: 'nowrap'
    }}
    {...props}
  />
);

export default VisuallyHidden;
