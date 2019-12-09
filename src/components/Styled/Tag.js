import React from 'react';
import { Text, Flex, Box } from './Box.js';

function Tag({ variant = 'default', children }) {
  const variants = {
    success: {
      bg: 'green.300',
      color: 'n.900'
    },
    warning: {
      bg: 'yellow.300',
      color: 'n.900'
    },
    danger: {
      bg: 'red.300',
      color: 'n.900'
    },
    default: {
      bg: 'p.500',
      color: 'white'
    }
  };

  const color = variants[variant];

  return (
    <Box>
      <Flex p="1" borderRadius="sm" sx={color} justifyContent="centre">
        <Text fontSize="0">{children}</Text>
      </Flex>
    </Box>
  );
}

export default Tag;
