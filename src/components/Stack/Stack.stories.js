import React from 'react';
import { storiesOf } from '@storybook/react';
import { Box } from '../Base';
import Stack from './Stack.js';

storiesOf('Styled System', module).add('Stack', () => {
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
});
