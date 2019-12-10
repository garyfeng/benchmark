import React from 'react';
import { Box } from '../Base';
import Stack from '../Stack.js';
import ScrollButton from './ScrollButton.js';

export default function examples() {
  return (
    <Stack direction="row">
      <Box>
        <ScrollButton />
      </Box>
      <Box>
        <ScrollButton disabled />
      </Box>
      <Box>
        <ScrollButton direction="up" />
      </Box>
      <Box>
        <ScrollButton direction="up" disabled />
      </Box>
    </Stack>
  );
}
