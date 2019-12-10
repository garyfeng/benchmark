import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global.js';
import ThemeProvider from '../ThemeProvider.js';
import { Box, Flex } from '../Base';
import Stack from '../Stack';
import { useToggle } from '../../../util/hooks.js';
import Toolbar from './Toolbar.js';
import ToolbarGroup from './ToolbarGroup.js';
import ToolbarScratchButton from './ToolbarScratchButton.js';
import ToolbarTimerButton from './ToolbarTimerButton.js';
import {
  ToolbarButton,
  ToolbarToggleButton,
  PrevButton,
  NextButton
} from './ToolbarButtons.js';

storiesOf('Toolbar', module).add('Toolbar', () => {
  const [helpActive, setHelpActive] = useToggle();
  const [timerActive, setTimerActive] = useToggle();
  const [ttsActive, setTTSActive] = useToggle();
  const [scratchActive, setSratchActive] = useToggle();
  const [calcActive, setCalcActive] = useToggle();
  const [pencilActive, setPencilActive] = useToggle();
  const [highlighterActive, setHighlighterActive] = useToggle();
  const [eraserActive, setEraserActive] = useToggle();
  const [language, setLanguage] = useState('en');
  const progress = 50;
  const itemTitle = 'VH12345';
  const blockTitle = 'Block Title';

  return (
    <Global>
      <ThemeProvider>
        <Box
          width="100%"
          sx={{
            position: 'absolute'
          }}
        >
          <Toolbar
            // data
            progress={progress}
            language={language}
            itemTitle={itemTitle}
            blockTitle={blockTitle}
            // toggle button states
            isHelpActive={helpActive}
            isTTSActive={ttsActive}
            isTimerActive={timerActive}
            isScratchActive={scratchActive}
            isPencilActive={pencilActive}
            isEraserActive={eraserActive}
            isHighlighterActive={highlighterActive}
            isCalcActive={calcActive}
            // event handlers
            onClickHelp={setHelpActive}
            onClickTTS={setTTSActive}
            onClickScratch={setSratchActive}
            onClickPencil={setPencilActive}
            onClickHighlighter={setHighlighterActive}
            onClickEraser={setEraserActive}
            onClickCalc={setCalcActive}
            onClickTimer={setTimerActive}
            onClickLang={() => setLanguage(language === 'en' ? 'es' : 'en')}
          />
        </Box>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Toolbar', module).add('Buttons', () => {
  return (
    <Global>
      <ThemeProvider>
        <Stack spacing={3} p="3">
          <Stack direction="row" bg="n.100" p={1}>
            <PrevButton />
            <PrevButton disabled />
            <NextButton />
            <NextButton disabled />
          </Stack>

          <Flex bg="n.100" p={1}>
            <ToolbarButton />
            <ToolbarButton disabled={true} />
          </Flex>
          <Flex bg="n.100">
            <ToolbarGroup>
              <ToolbarButton />
              <ToolbarButton />
              <ToolbarButton />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarButton />
              <ToolbarButton />
            </ToolbarGroup>
            <ToolbarGroup>
              <ToolbarButton />
            </ToolbarGroup>
          </Flex>
          <Stack direction="row" bg="n.100" p={1}>
            <ToolbarToggleButton isActive={false} />
            <ToolbarToggleButton isActive={true} />
            <ToolbarToggleButton isActive={false} disabled />
            <ToolbarToggleButton isActive={true} disabled />
          </Stack>
          <Stack direction="row" bg="n.100" p={1}>
            <ToolbarScratchButton isScratchActive={false} />
            <ToolbarScratchButton
              title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
              isScratchActive={true}
            >
              <ToolbarToggleButton
                id="pencil-btn"
                title="Pencil. Turns on write mode. This lets you write on the screen."
                size="sm"
              />
              <ToolbarToggleButton
                id="highlighter-btn"
                title="Highlighter. Turns on highlight mode. This lets you highlight parts of the screen."
                size="sm"
              />
              <ToolbarToggleButton
                id="eraser-btn"
                title="Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights."
                size="sm"
              />
              <ToolbarButton
                id="clear-scratch-btn"
                title="Clear Scratchwork. Clears all scratchwork on the screen."
                size="sm"
              />
            </ToolbarScratchButton>
          </Stack>
          <Stack direction="row" bg="n.100" p={1}>
            <ToolbarTimerButton isTimerActive={false} />
            <ToolbarTimerButton isTimerActive={true} />
          </Stack>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
