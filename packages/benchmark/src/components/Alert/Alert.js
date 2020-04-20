import React from 'react';
import {
  IoIosWarning,
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
  IoIosGlobe
} from 'react-icons/io';
import { Flex, Box } from '../Base';

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

  const icons = {
    default: IoIosGlobe,
    warning: IoIosWarning,
    success: IoIosCheckmarkCircleOutline,
    danger: IoIosCloseCircleOutline
  };

  const Icon = icons[variant];

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
            <Icon size="50" />
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
