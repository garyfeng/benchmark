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
  const containerActive = {
    overflow: 'hidden',
    border: '1',
    borderColor: 'blue.400',
    borderRadius: 'default',
    borderTopLeftRadius: 'none',
    borderBottomLeftRadius: 'none',
    borderLeft: 0
  };

  const toggleButtonActive = {
    borderRight: '1',
    bg: 'blue.100',
    borderColor: 'blue.400',
    borderRadius: 'default',
    borderTopRightRadius: 'none',
    borderBottomRightRadius: 'none',
    ':hover': {
      bg: 'blue.50',
      borderColor: 'blue.400'
    }
  };

  return (
    <Flex {...rest}>
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
        sx={isScratchActive ? containerActive : null}
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
