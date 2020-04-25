import React from 'react';
import Stack from '../Stack';

function ToolbarGroup({ direction = 'row', ...rest }) {
  return (
    <Stack
      alignItems="center"
      spacing={1}
      px={2}
      py={1}
      borderRight={1}
      borderRightColor="n.400"
      overflow="hidden"
      direction={direction}
      {...rest}
    />
  );
}

export default ToolbarGroup;
