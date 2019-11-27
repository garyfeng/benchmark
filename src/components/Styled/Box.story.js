import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';

import { ThemeProvider } from './Box';
import {
  IoMdArrowRoundBack,
  IoIosApps,
  IoMdArrowRoundForward
} from 'react-icons/io';
import Stack from './Stack.js';
import Button from './Button';
import MultipleChoice from './MultipleChoice';
import { Box, Text, Flex } from './Box';
import ToolbarToggleButton from './ToolbarToggleButton';
import ToolbarButton from './ToolbarButton';
import ToolbarGroup from './ToolbarGroup';
import ToolbarScratchButton from './ToolbarScratchButton';
import ToolbarTimerButton from './ToolbarTimerButton';
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
          // data
          progress={progress}
          language={language}
          // toggle button states
          isHelpActive={helpActive}
          isTTSActive={ttsActive}
          isTimerActive={timerActive}
          isScratchActive={scratchActive}
          isCalcActive={calcActive}
          // event handlers
          onClickHelp={() => setHelpActive(!helpActive)}
          onClickTTS={() => setTTSActive(!ttsActive)}
          onClickScratch={() => setSratchActive(!scratchActive)}
          onClickCalc={() => setCalcActive(!calcActive)}
          onClickTimer={() => setTimerActive(!timerActive)}
          onClickLang={() => setLanguage(language === 'en' ? 'es' : 'en')}
        />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Styled System', module).add('Buttons', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing={3}>
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

          <Stack direction="row" bg="gray.100" p={1}>
            <Button id="prev-btn" variant="prev">
              <IoMdArrowRoundBack size={30} />
            </Button>
            <Button id="prev-btn" variant="prev" disabled={true}>
              <IoMdArrowRoundBack size={30} />
            </Button>
            <Flex alignItems="center">
              <Button id="next-btn" variant="next" flexShrink={0}>
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
              <Button id="next-btn" variant="next" flexShrink={0} disabled>
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

          <Flex bg="gray.100" p={1}>
            <ToolbarButton icon={IoIosApps} />
            <ToolbarButton icon={IoIosApps} disabled={true} />
          </Flex>
          <Flex bg="gray.100">
            <ToolbarGroup>
              <ToolbarButton icon={IoIosApps} />
              <ToolbarButton icon={IoIosApps} />
              <ToolbarButton icon={IoIosApps} />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarButton icon={IoIosApps} />
              <ToolbarButton icon={IoIosApps} />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarButton icon={IoIosApps} />
            </ToolbarGroup>
          </Flex>
          <Stack direction="row" bg="gray.100" p={1}>
            <ToolbarToggleButton icon={IoIosApps} isActive={false} />
            <ToolbarToggleButton icon={IoIosApps} isActive={true} />
            <ToolbarToggleButton icon={IoIosApps} isActive={false} disabled />
            <ToolbarToggleButton icon={IoIosApps} isActive={true} disabled />
          </Stack>
          <Stack direction="row" bg="gray.100" p={1}>
            <ToolbarScratchButton isScratchActive={false} />
            <ToolbarScratchButton isScratchActive={true} />
          </Stack>
          <Stack direction="row" bg="gray.100" p={1}>
            <ToolbarTimerButton isTimerActive={false} />
            <ToolbarTimerButton isTimerActive={true} />
          </Stack>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
