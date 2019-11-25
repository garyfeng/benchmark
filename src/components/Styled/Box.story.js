import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';

import { ThemeProvider } from './Box';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Choice from './Choice.js';
import Stack from './Stack.js';
import Button from './Button';
import { Box, Text } from './Box';
import theme from './theme.js';
import Option from './Option.js';
import Toolbar from './Toolbar';

storiesOf('Styled System', module).add('Default', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="2">
          <Option selected={false}>Midnight</Option>
          <Option selected={true}>Cocoa</Option>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Stack', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="2" border="1" borderColor="gray.500">
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
        <Stack mt="3" direction="row" border="1" borderColor="gray.500">
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
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Toolbar', () => {
  const [helpActive, setHelpActive] = useState(false);
  const [ttsActive, setTTSActive] = useState(false);
  const [scratchActive, setSratchActive] = useState(false);
  const [calcActive, setCalcActive] = useState(false);

  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Toolbar
          isHelpActive={helpActive}
          isTTSActive={ttsActive}
          isScratchActive={scratchActive}
          isCalcActive={calcActive}
          onToggleHelp={() => setHelpActive(!helpActive)}
          onToggleTTS={() => setTTSActive(!ttsActive)}
          onToggleScratch={() => setSratchActive(!scratchActive)}
          onToggleCalc={() => setCalcActive(!calcActive)}
        />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Buttons', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="2" direction="row">
          <Button>Primary</Button>
          <Button disabled>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="secondary" disabled>
            Secondary
          </Button>
          <Button id="prev-btn" variant="prev">
            <IoMdArrowRoundBack size={32} />
          </Button>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
