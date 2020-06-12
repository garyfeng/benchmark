import React from 'react';
import { Text } from '../Base';

function Heading({ children, level = 1, ...props }) {
  const H = 'h' + level;
  const size = 7 - level;

  return (
    <Text as={H} display="block" fontSize={size} fontWeight="light" {...props}>
      {children}
    </Text>
  );
}

export default Heading;
