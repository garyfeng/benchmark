import React from 'react';
import { Flex } from './Box';
import ToolbarButton from './ToolbarButton';
import Button from './Button';

import { IoIosApps, IoIosColorPalette } from 'react-icons/io';

const ToolbarScratchButton = ({
  isScratchActive,
  onToggleScratch,
  ...rest
}) => {
  const activeStyle = {
    border: 1,
    borderColor: 'blue.300',
    borderRadius: 'default',
    overflow: 'hidden'
  };

  const toggleButtonActive = {
    borderRight: '1',
    bg: 'blue.100',
    borderRightColor: 'blue.300',
    borderLeft: 'none',
    borderTop: 'none',
    borderBottom: 'none',
    borderRadius: 0,
    ':hover': {
      bg: 'blue.50',
      borderRight: '1',
      borderRightColor: 'blue.300',
      borderLeft: 'none',
      borderTop: 'none',
      borderBottom: 'none'
    }
  };

  return (
    <Flex sx={isScratchActive ? activeStyle : null} {...rest}>
      <Button
        variant="toolbar"
        onClick={onToggleScratch}
        sx={isScratchActive ? toggleButtonActive : null}
      >
        <IoIosColorPalette size="42" />
      </Button>

      <Flex
        direction="row"
        bg="white"
        width={!isScratchActive ? '0' : '100%'}
        p={isScratchActive ? 1 : 0}
        flex={isScratchActive ? 1 : 0}
        sx={{
          overflow: 'hidden'
          // transition: 'all .5s'
        }}
      >
        <ToolbarButton icon={IoIosApps} variant="tray" />
        <ToolbarButton icon={IoIosApps} variant="tray" />
        <ToolbarButton icon={IoIosApps} variant="tray" />
        <ToolbarButton icon={IoIosApps} variant="tray" />
      </Flex>
    </Flex>
  );
};

export default ToolbarScratchButton;
