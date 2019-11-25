import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';

import { ThemeProvider } from './Box';
import Choice from './Choice.js';
import Stack from './Stack.js';
import Button from './Button';
import theme from './theme.js';
import Option from './Option.js';
import Toolbar from './Toolbar';

storiesOf('Styled System', module).add('Default', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="3">
          <Option selected={false}>Midnight</Option>
          <Option selected={true}>Cocoa</Option>
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
