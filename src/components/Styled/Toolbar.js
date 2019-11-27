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
  accnum = 'VH12345',
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
      bg="gray.100"
      borderBottom={1}
      borderBottomColor="gray.400"
    >
      {/* HELP */}
      <ToolbarGroup>
        <ToolbarToggleButton
          id="help-btn"
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
          icon={IoIosApps}
          disabled={isThemeDisabled}
        />
        <ToolbarButton
          id="zoomin-btn"
          icon={MdZoomIn}
          disabled={isZoomInDisabled}
        />
        <ToolbarButton
          id="zoomout-btn"
          icon={MdZoomOut}
          disabled={isZoomOutDisabled}
        />
        <ToolbarButton
          id="lang-btn"
          icon={IoIosGlobe}
          onClick={onClickLang}
          disabled={isLangDisabled}
          sx={{
            transform: language === 'es' ? 'rotateY(180deg);' : null,
            color: language === 'es' ? 'green.500' : 'gray.800',
            transition: 'transform .2s'
          }}
        />
      </ToolbarGroup>

      {/* UTILITIES */}
      <ToolbarGroup>
        <ToolbarToggleButton
          id="tts-btn"
          icon={IoIosApps}
          isActive={isTTSActive}
          onClick={onClickTTS}
          disabled={isTTSDisabled}
        />
        <ToolbarScratchButton
          isScratchActive={isScratchActive}
          onClickScratch={onClickScratch}
          disabled={isScratchDisabled}
        />
        <ToolbarButton
          id="math-btn"
          icon={IoIosApps}
          disabled={isMathDisabled}
        />
        <ToolbarToggleButton
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
          {accnum}
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
          borderColor="gray.400"
          borderRadius={3}
          width="100%"
          height="18px"
        >
          <Box width={progress + '%'} height="100%" bg="green.500"></Box>
        </Box>
      </ToolbarGroup>

      {/* NAVIGATION */}
      <ToolbarGroup borderRight="none">
        <Button
          id="prev-btn"
          variant="prev"
          flexShrink={0}
          onClick={onClickPrev}
          disabled={isPrevDisabled}
        >
          <IoMdArrowRoundBack size={30} />
        </Button>
        <Button
          id="next-btn"
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
