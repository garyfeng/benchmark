import React from 'react';
import { Box } from '../Base';
import Stack from './Stack.js';

export default {
  title: 'Layout/Stack',
  component: Stack
};

export function Basic() {
  return (
    <>
      <Stack spacing="2" border="1" borderColor="n.500">
        <Box bg="blue.100" p="2">
          Column
        </Box>
        <Box bg="green.100" p="2">
          Column
        </Box>
        <Box bg="orange.100" p="2">
          Column
        </Box>
      </Stack>
      <Stack mt="3" direction="row" border="1" borderColor="n.500">
        <Box bg="blue.100" p="2">
          Row
        </Box>
        <Box bg="green.100" p="2">
          Row
        </Box>
        <Box bg="orange.100" p="2">
          Row
        </Box>
      </Stack>
    </>
  );
}
