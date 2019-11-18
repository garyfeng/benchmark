import React from 'react';
import { Box, Flex, Text } from './Box.js';

function Choice({ children }) {
  return (
    <Box borderRadius="lg" borderWidth="2px">
      <Flex>
        <Flex bg="blue.100" p="2">
          <Box>
            <Box size="8" />
          </Box>
        </Flex>
        <Flex p="2" align="center">
          <Text fontWeight="bold">{children}</Text>
        </Flex>
        <Flex p="2" align="center">
          <Box color="gray.500" size="8" />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Choice;
