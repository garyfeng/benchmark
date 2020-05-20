import React from 'react';
import { Flex, Box } from '../Base';
import Icon from '../Icon';

function Alert({ variant = 'default', border = true, children }) {
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
      <Flex
        p="3"
        borderRadius="md"
        border={border ? 1 : 0}
        borderColor="gray.300"
      >
        <Box>
          <Flex borderRadius="md" sx={color} p="2">
            <Icon size="50px" />
          </Flex>
        </Box>

        <Flex flexDirection="column" pt="1" pl="3">
          {children}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Alert;
