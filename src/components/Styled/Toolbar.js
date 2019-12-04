import { Flex } from './Box';
import Button from './Button';
import React from 'react';
import { Box, Text } from './Box';
import ToolbarGroup from './ToolbarGroup';
import ToolbarButton from './ToolbarButton';
import ToolbarToggleButton from './ToolbarToggleButton';
import ToolbarScratchButton from './ToolbarScratchButton';
import ToolbarTimerButton from './ToolbarTimerButton';
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import {
  IoMdHelpCircle,
  IoMdArrowRoundForward,
  IoMdArrowRoundBack,
  IoMdCalculator,
  IoIosApps,
  IoIosGlobe
} from 'react-icons/io';

const Toolbar = ({
  id,

  // data
  progress = 50,
  itemTitle = 'VH12345',
  blockTitle = 'Block Title',
  language = 'en',

  // disable buttons
  isHelpDisabled,
  isThemeDisabled,
  isZoomInDisabled,
  isZoomOutDisabled,
  isLangDisabled,
  isTTSDisabled,
  isScratchDisabled,
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
  isTimerActive,

  // events
  onClickNext,
  onClickPrev,
  onClickScratch,
  onClickTimer,
  onClickHelp,
  onClickCalc,
  onClickLang,
  onClickTTS
}) => {
  return (
    <Flex
      id={id}
      width="100vw"
      bg="n.100"
      borderBottom={1}
      borderBottomColor="n.400"
    >
      {/* HELP */}
      <ToolbarGroup>
        <ToolbarToggleButton
          id="help-btn"
          title="Help. Shows help and directions."
          icon={IoMdHelpCircle}
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
          icon={IoIosApps}
          disabled={isThemeDisabled}
        />
        <ToolbarButton
          id="zoomout-btn"
          title="Zoom Out. Makes the words and images smaller."
          icon={MdZoomOut}
          disabled={isZoomOutDisabled}
        />
        <ToolbarButton
          title="Zoom In. Makes the words and images larger."
          id="zoomin-btn"
          icon={MdZoomIn}
          disabled={isZoomInDisabled}
        />
        <ToolbarButton
          id="lang-btn"
          icon={IoIosGlobe}
          // todo: update label for english
          title="Change to Spanish."
          onClick={onClickLang}
          disabled={isLangDisabled}
          sx={{
            transform: language === 'es' ? 'rotateY(180deg);' : null,
            color: language === 'es' ? 'green.500' : 'n.800',
            transition: 'transform .2s'
          }}
        />
      </ToolbarGroup>

      {/* UTILITIES */}
      <ToolbarGroup>
        <ToolbarToggleButton
          id="tts-btn"
          title="Read Aloud. Turns on read aloud mode. You can tap any box to hear the text read out loud."
          icon={IoIosApps}
          isActive={isTTSActive}
          onClick={onClickTTS}
          disabled={isTTSDisabled}
        />
        <ToolbarScratchButton
          title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
          isScratchActive={isScratchActive}
          onClickScratch={onClickScratch}
          disabled={isScratchDisabled}
        />
        <ToolbarButton
          title="Math Keyboard. Shows the on-screen math keyboard."
          id="math-btn"
          icon={IoIosApps}
          disabled={isMathDisabled}
        />
        <ToolbarToggleButton
          title="Calculator. Shows the calculator."
          id="calc-btn"
          icon={IoMdCalculator}
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
        display={['none', 'none', 'none', 'flex']}
        justifyContent="space-evenly"
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
        >
          <Box width={progress + '%'} height="100%" bg="green.500"></Box>
        </Box>
      </ToolbarGroup>

      {/* NAVIGATION */}
      <ToolbarGroup borderRight="none">
        <Button
          id="prev-btn"
          title="Back. Returns to the previous screen."
          variant="prev"
          flexShrink={0}
          onClick={onClickPrev}
          disabled={isPrevDisabled}
        >
          <IoMdArrowRoundBack size={30} />
        </Button>
        <Button
          id="next-btn"
          title="Next. Moves to the next screen."
          variant="next"
          flexShrink={0}
          onClick={onClickNext}
          disabled={isNextDisabled}
        >
          <Text
            // todo: add adjustments into base text component
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
      </ToolbarGroup>
    </Flex>
  );
};

export default Toolbar;
