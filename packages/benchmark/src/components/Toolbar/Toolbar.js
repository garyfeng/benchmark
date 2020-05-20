import React from 'react';
import { RovingTabIndexProvider } from 'react-roving-tabindex';
import { Box, Text, Flex } from '../Base';
import ToolbarGroup from './ToolbarGroup';
import {
  ToolbarButton,
  ToolbarToggleButton,
  PrevButton,
  NextButton
} from './ToolbarButtons.js';
import ToolbarScratchButton from './ToolbarScratchButton';
import ToolbarTimerButton from './ToolbarTimerButton';

const Toolbar = ({
  id,

  // data
  blockTitle,
  itemTitle,
  label,
  language = 'en',
  progress = 50,

  // disable buttons
  isHelpDisabled,
  isThemeDisabled,
  isZoomInDisabled,
  isZoomOutDisabled,
  isLangDisabled,
  isTTSDisabled = true,
  isScratchDisabled,
  isPencilDisabled,
  isHighlighterDisabled,
  isEraserDisabled,
  isClearDisabled,
  isMathDisabled,
  isCalcDisabled,
  isTimerDisabled,
  isPrevDisabled,
  isNextDisabled,

  // toggle button state
  isHelpActive,
  isTTSActive,
  isCalcActive,
  isScratchActive,
  isPencilActive,
  isHighlighterActive,
  isEraserActive,
  isTimerActive,

  // events
  onClickNext,
  onClickPrev,
  onClickScratch,
  onClickPencil,
  onClickHighlighter,
  onClickEraser,
  onClickClear,
  onClickTimer,
  onClickHelp,
  onClickCalc,
  onClickLang,
  onClickTTS
}) => {
  return (
    <Flex
      id={id}
      role="toolbar"
      aria-label={label}
      bg="n.100"
      borderBottom={1}
      borderBottomColor="n.400"
    >
      <RovingTabIndexProvider>
        {/* HELP */}
        <ToolbarGroup>
          <ToolbarToggleButton
            id="help-btn"
            title="Help. Shows help and directions."
            icon="question-circle"
            isActive={isHelpActive}
            onClick={onClickHelp}
            disabled={isHelpDisabled}
          />
        </ToolbarGroup>

        {/* VIEW */}
        <ToolbarGroup>
          <ToolbarButton
            id="theme-btn"
            title="Change Theme. Changes the colors used on the screen."
            icon="change-theme"
            disabled={isThemeDisabled}
          />
          <ToolbarButton
            id="zoomout-btn"
            title="Zoom Out. Makes the words and images smaller."
            icon="zoom-out"
            disabled={isZoomOutDisabled}
          />
          <ToolbarButton
            title="Zoom In. Makes the words and images larger."
            id="zoomin-btn"
            icon="zoom-in"
            disabled={isZoomInDisabled}
          />
          <ToolbarButton
            id="lang-btn"
            icon={language === 'es' ? 'lang-es' : 'lang-en'}
            title={
              // todo: should the I be capitalized in inglés?
              language === 'es' ? 'Cambiar a inglés.' : 'Change to Spanish.'
            }
            onClick={onClickLang}
            disabled={isLangDisabled}
            sx={{
              transform: language === 'es' ? 'rotateY(360deg);' : null,
              color: language === 'es' ? 'green.500' : 'n.800',
              transition: 'transform .4s'
            }}
          />
        </ToolbarGroup>

        {/* UTILITIES */}
        <ToolbarGroup>
          <ToolbarToggleButton
            id="tts-btn"
            title="Read Aloud. Turns on read aloud mode. You can tap any box to hear the text read out loud."
            icon="placeholder"
            isActive={isTTSActive}
            onClick={onClickTTS}
            disabled={isTTSDisabled}
          />
          <ToolbarScratchButton
            title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
            isScratchActive={isScratchActive}
            onClickScratch={onClickScratch}
            disabled={isScratchDisabled}
          >
            <ToolbarToggleButton
              id="pencil-btn"
              title="Pencil. Turns on write mode. This lets you write on the screen."
              onClick={onClickPencil}
              isActive={isPencilActive}
              disabled={isPencilDisabled}
              size="sm"
            />
            <ToolbarToggleButton
              id="highlighter-btn"
              title="Highlighter. Turns on highlight mode. This lets you highlight parts of the screen."
              onClick={onClickHighlighter}
              isActive={isHighlighterActive}
              disabled={isHighlighterDisabled}
              size="sm"
            />
            <ToolbarToggleButton
              id="eraser-btn"
              title="Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights."
              onClick={onClickEraser}
              isActive={isEraserActive}
              disabled={isEraserDisabled}
              size="sm"
            />
            <ToolbarButton
              id="clear-scratch-btn"
              title="Clear Scratchwork. Clears all scratchwork on the screen."
              onClick={onClickClear}
              disabled={isClearDisabled}
              size="sm"
            />
          </ToolbarScratchButton>
          <ToolbarButton
            title="Math Keyboard. Shows the on-screen math keyboard."
            id="math-btn"
            icon="placeholder"
            disabled={isMathDisabled}
          />
          <ToolbarToggleButton
            title="Calculator. Shows the calculator."
            id="calc-btn"
            icon="placeholder"
            isActive={isCalcActive}
            onClick={onClickCalc}
            disabled={isCalcDisabled}
          />
        </ToolbarGroup>

        {/* TITLE */}
        <ToolbarGroup
          flex={1}
          justifyContent="space-evenly"
          direction="column"
          overflow="hidden"
          spacing={0}
        >
          <Text
            id="accnum"
            fontSize={2}
            sx={{
              whiteSpace: 'nowrap'
            }}
          >
            {itemTitle}
          </Text>
          <Text
            id="block"
            fontSize={2}
            sx={{
              whiteSpace: 'nowrap'
            }}
          >
            {blockTitle}
          </Text>
        </ToolbarGroup>

        {/* TIMER */}
        <ToolbarGroup display={['none', 'none', 'none', 'block']}>
          <ToolbarTimerButton
            id="timer-btn"
            isTimerActive={isTimerActive}
            onClickTimer={onClickTimer}
            disabled={isTimerDisabled}
          />
        </ToolbarGroup>

        {/* PROGRESS */}
        <ToolbarGroup
          // display={['none', 'none', 'none', 'flex']}
          justifyContent="space-evenly"
          alignItems="stretch"
          direction="column"
          px="3"
        >
          <Text fontSize={2}>Progress</Text>
          <Box
            id="progress"
            border={2}
            bg="white"
            borderColor="n.400"
            borderRadius={3}
            width="100%"
            height="18px"
            title="Progress. This is how far you are in the section."
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin="0"
            aria-valuemax="100"
            sx={{
              width: '100%'
            }}
          >
            <Box width={progress + '%'} height="100%" bg="green.500"></Box>
          </Box>
        </ToolbarGroup>

        {/* NAVIGATION */}
        <ToolbarGroup borderRight="none">
          <PrevButton
            id="prev-btn"
            title="Back. Returns to the previous screen."
            onClick={onClickPrev}
            disabled={isPrevDisabled}
          />
          <NextButton
            id="next-btn"
            title="Next. Moves to the next screen."
            onClick={onClickNext}
            disabled={isNextDisabled}
          />
        </ToolbarGroup>
      </RovingTabIndexProvider>
    </Flex>
  );
};

export default Toolbar;
