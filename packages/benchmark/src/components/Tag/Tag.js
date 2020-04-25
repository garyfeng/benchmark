import React from 'react';
import { Text, Flex, Box } from '../Base';

function Tag({ variant = 'default', children }) {
  const variants = {
    default: {
      bg: 'primary',
      color: 'primaryAlt'
    },
    success: {
      bg: 'success',
      color: 'successAlt'
    },
    warning: {
      bg: 'warning',
      color: 'warningAlt'
    },
    danger: {
      bg: 'danger',
      color: 'dangerAlt'
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
