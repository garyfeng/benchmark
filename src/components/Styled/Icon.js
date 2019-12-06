import React from 'react';
import { Box } from './Box.js';

function Icon({ children, size = 1 }) {
  return <Box size={size}>{children}</Box>;
}

export default Icon;
