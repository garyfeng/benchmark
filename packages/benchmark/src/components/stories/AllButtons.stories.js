import React from 'react';
import { NextButton, PrevButton } from '../Toolbar';
import ButtonExamples from '../Button/examples.js';
import ScrollButtonExamples from '../ScrollButton/examples.js';
import ThemeProvider from '../ThemeProvider';
import themes from '../themes';
import Stack from '../Stack';
import { Box } from '../Base';

export default {
  title: 'Collections'
};

function ButtonCollection() {
  return (
    <Stack spacing={3} p="3">
      <Box>
        <ButtonExamples />
      </Box>
      <Box>
        <ScrollButtonExamples />
      </Box>
      <Stack direction="row" bg="n.100" p={1}>
        <PrevButton />
        <PrevButton disabled />
        <NextButton />
        <NextButton disabled />
      </Stack>
    </Stack>
  );
}

export function AllButtons() {
  return (
    <Stack>
      <Box>
        <ThemeProvider>
          <ButtonCollection />
        </ThemeProvider>
      </Box>
      <Box>
        <ThemeProvider theme={themes.dark}>
          <ButtonCollection />
        </ThemeProvider>
      </Box>
      <Box>
        <ThemeProvider theme={themes.beiege}>
          <ButtonCollection />
        </ThemeProvider>
      </Box>
    </Stack>
  );
}
