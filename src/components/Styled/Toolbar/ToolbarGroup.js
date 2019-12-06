import React from 'react';
import Stack from '../Stack';

const ToolbarGroup = props => (
  <Stack
    alignItems="center"
    spacing={1}
    px={2}
    py={1}
    borderRight={1}
    borderRightColor="n.400"
    overflow="hidden"
    {...props}
  />
);

ToolbarGroup.defaultProps = {
  direction: 'row'
};

export default ToolbarGroup;
