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

      {isScratchActive ? (
        <Flex
          bg="white"
          p={1}
          flex={1}
          border={1}
          borderColor="blue.400"
          borderRadius="default"
          borderTopLeftRadius="none"
          borderBottomLeftRadius={0}
          borderLeft={0}
        >
          <ToolbarButton icon={IoIosApps} variant="tray" />
          <ToolbarButton icon={IoIosApps} variant="tray" />
          <ToolbarButton icon={IoIosApps} variant="tray" />
          <ToolbarButton icon={IoIosApps} variant="tray" />
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ToolbarScratchButton;
