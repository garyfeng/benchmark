import React from 'react';
import { storiesOf } from '@storybook/react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import ButtonExamples from '../Button/examples.js';
import ScrollButtonExamples from '../ScrollButton/examples.js';
import ThemeProvider from '../ThemeProvider';
import themes from '../themes';
import Stack from '../Stack';
import Button from '../Button';
import { Box, Text, Flex } from '../Base';

function Buttons() {
  return (
    <Stack spacing={3} p="3">
      <Box>
        <ButtonExamples />
      </Box>
      <Box>
        <ScrollButtonExamples />
      </Box>

      <Stack direction="row" bg="n.100" p={1}>
        <Button variant="prev">
          <IoMdArrowRoundBack size={30} />
        </Button>
        <Button variant="prev" disabled={true}>
          <IoMdArrowRoundBack size={30} />
        </Button>
        <Flex alignItems="center">
          <Button variant="next" flexShrink={0}>
            <Text
              sx={{
                '::before': {
                  content: "''",
                  height: 0,
                  display: 'block',
                  mt: '-5px'
                }
              }}
            >
              Next
            </Text>
            <IoMdArrowRoundForward size={32} />
          </Button>
        </Flex>
        <Flex alignItems="center">
          <Button variant="next" flexShrink={0} disabled>
            <Text
              sx={{
                '::before': {
                  content: "''",
                  height: 0,
                  display: 'block',
                  mt: '-5px'
                }
              }}
            >
              Next
            </Text>
            <IoMdArrowRoundForward size={32} />
          </Button>
        </Flex>
      </Stack>
    </Stack>
  );
}

storiesOf('Collections', module).add('All Buttons', () => {
  return (
    <Stack>
      <Box>
        <ThemeProvider>
          <Buttons />
        </ThemeProvider>
      </Box>
      <Box>
        <ThemeProvider theme={themes.dark}>
          <Buttons />
        </ThemeProvider>
      </Box>
      <Box>
        <ThemeProvider theme={themes.beiege}>
          <Buttons />
        </ThemeProvider>
      </Box>
    </Stack>
  );
});
