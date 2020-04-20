import React from 'react';
import { Text } from '../Base';

function Heading({ children, level = 1 }) {
  const H = 'h' + level;
  const size = 7 - level;

  return (
    <Text as={H} display="block" fontSize={size} fontWeight="light">
      {children}
    </Text>
  );
}

export default Heading;
