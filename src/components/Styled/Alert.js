import React from "react";
import { Flex, Box } from "./Box.js";
import {
  IoIosWarning,
  IoIosCheckmarkCircleOutline,
  IoIosCloseCircleOutline,
  IoIosGlobe
} from "react-icons/io";

function Alert({ variant = "default", border = true, children }) {
  const variants = {
    success: {
      bg: "green.300",
      color: "black"
    },
    warning: {
      bg: "orange.200",
      color: "white"
    },
    danger: {
      bg: "red.400",
      color: "white"
    },
    default: {
      bg: "primary",
      color: "white"
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
