import { Flex } from './Box';
import Button from './Button';
import React from 'react';
import { Box, Text } from './Box';
import ToolbarGroup from './ToolbarGroup';
import ToolbarButton from './ToolbarButton';
import ToolbarToggleButton from './ToolbarToggleButton';
import ToolbarScratchButton from './ToolbarScratchButton';
import { MdZoomIn, MdZoomOut } from 'react-icons/md';
import {
  IoMdHelpCircle,
  IoMdArrowRoundForward,
  IoMdArrowRoundBack,
  IoMdCalculator,
  IoIosApps,
  IoIosGlobe,
  IoIosTimer
} from 'react-icons/io';

const Toolbar = ({
  id,
  progress = 50,
  accnum = 'VH12345',
  blockTitle = 'Block Title',
  isHelpActive,
  isTTSActive,
  isCalcActive,
  isScratchActive,
  onToggleHelp,
  onToggleScratch,
  onToggleCalc,
  onToggleTTS
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
          onClick={onToggleHelp}
        />
      </ToolbarGroup>

      {/* VIEW */}
      <ToolbarGroup>
        <ToolbarButton id="theme-btn" icon={IoIosApps} />
        <ToolbarButton id="zoomin-btn" icon={MdZoomIn} />
        <ToolbarButton id="zoomout-btn" icon={MdZoomOut} />
        <ToolbarButton id="lang-btn" icon={IoIosGlobe} />
      </ToolbarGroup>

      {/* UTILITIES */}
      <ToolbarGroup>
        <ToolbarToggleButton
          id="tts-btn"
          icon={IoIosApps}
          isActive={isTTSActive}
          onClick={onToggleTTS}
        />
        <ToolbarScratchButton
          isScratchActive={isScratchActive}
          onToggleScratch={onToggleScratch}
        />
        <ToolbarButton id="math-btn" icon={IoIosApps} />
        <ToolbarToggleButton
          id="calc-btn"
          icon={IoMdCalculator}
          isActive={isCalcActive}
          onClick={onToggleCalc}
        />
      </ToolbarGroup>

      {/* TITLE */}
      <ToolbarGroup
        flex={1}
        justifyContent="center"
        direction="column"
        overflow="hidden"
        display={['none', 'none', 'none', 'flex']}
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
        <ToolbarButton id="timer-btn" icon={IoIosTimer} />
      </ToolbarGroup>

      {/* PROGRESS */}
      <ToolbarGroup
        display={['none', 'none', 'none', 'flex']}
        justifyContent="space-evenly"
        direction="column"
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
        <Button id="prev-btn" variant="prev">
          <IoMdArrowRoundBack size={32} />
        </Button>
        <Button id="next-btn" variant="next">
          <Text
            display={['none', 'none', 'none', 'block']}
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
          <IoMdArrowRoundForward display={[0, 1]} size={32} />
        </Button>
      </ToolbarGroup>
    </Flex>
  );
};

export default Toolbar;
