import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';

import { ThemeProvider } from './Box';
import { IoMdArrowRoundBack } from 'react-icons/io';
import Stack from './Stack.js';
import Button from './Button';
import MultipleChoice from './MultipleChoice';
import { Box, Text } from './Box';
import theme from './theme.js';
import Option from './Option.js';
import Toolbar from './Toolbar';
import { useArrayToggle } from '../../util/hooks.js';

storiesOf('Styled System', module).add('Default', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="2">
          <Option isSelected={false}>Unselected</Option>
          <Option isSelected={true}>Selected</Option>
          <Option isEliminated={true}>Eliminated</Option>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('MultipleChoice', () => {
  function handleEliminate(value) {
    setEliminated(value);
    if (value === selected) {
      setSelected(null);
    }
  }

  function handleSelect(value) {
    setSelected(value);
    if (eliminated.includes(value)) {
      setEliminated(value);
    }
  }
  const [selected, setSelected] = useState();
  const [eliminated, setEliminated] = useArrayToggle();
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <MultipleChoice
          onClear={() => setSelected()}
          onChange={option => handleSelect(option)}
          onEliminate={option => handleEliminate(option)}
          selected={selected}
          eliminated={eliminated}
        >
          <Option value="a">Unselected</Option>
          <Option value="b">Selected</Option>
          <Option value="c">Eliminated</Option>
        </MultipleChoice>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Text', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack>
          <Text fontSize={1}>Size 1</Text>
          <Text fontSize={2}>Size 2</Text>
          <Text fontSize={3}>Size 3</Text>
          <Text fontSize={4}>Size 4</Text>
          <Text fontSize={5}>Size 5</Text>
          <Text fontSize={6}>Size 6</Text>
          <Text fontSize={7}>Size 7</Text>
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
  const [timerActive, setTimerActive] = useState(true);
  const [ttsActive, setTTSActive] = useState(false);
  const [scratchActive, setSratchActive] = useState(false);
  const [calcActive, setCalcActive] = useState(false);
  const [language, setLanguage] = useState('en');
  const progress = 50;

  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Toolbar
          isHelpActive={helpActive}
          isTTSActive={ttsActive}
          isTimerActive={timerActive}
          isScratchActive={scratchActive}
          isCalcActive={calcActive}
          onToggleHelp={() => setHelpActive(!helpActive)}
          onToggleTTS={() => setTTSActive(!ttsActive)}
          onToggleScratch={() => setSratchActive(!scratchActive)}
          onToggleCalc={() => setCalcActive(!calcActive)}
          onToggleTimer={() => setTimerActive(!timerActive)}
          onToggleLang={() => setLanguage(language === 'en' ? 'es' : 'en')}
          progress={progress}
          language={language}
        />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Buttons', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack>
          <Stack spacing="2" direction="row">
            <Button>Primary</Button>
            <Button disabled>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>
              Secondary
            </Button>
          </Stack>
          <Stack>
            <Box>
              <Button variant="secondary">Clear Answer</Button>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Button id="prev-btn" variant="prev">
                <IoMdArrowRoundBack size={32} />
              </Button>
            </Box>
          </Stack>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
