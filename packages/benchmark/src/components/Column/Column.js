import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';

function Column({ children, id, width, p = '4', ...props }) {
  const widths = {
    '1/2': '0 0 50%',
    '1/3': '0 0 33.3333333%',
    '2/3': '0 0 66.66666666%',
    '1/4': '0 0 25%',
    '3/4': '0 0 75%'
  };

  const columnWidth = width !== 'content' ? '100%' : null;
  const flexShrink = width === 'content' ? '0' : null;
  const flex = widths[width];

  return (
    <Box
      id={id}
      p={p}
      width={columnWidth}
      flexShrink={flexShrink}
      flex={flex}
      {...props}
    >
      {children}
    </Box>
  );
}

Column.propTypes = {
  id: PropTypes.string,
  width: PropTypes.oneOf(['content', '1/2', '1/3', '2/3', '1/4', '3/4'])
};

export default Column;
