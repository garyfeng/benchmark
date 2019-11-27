import React from 'react';
import { Flex } from './Box';
import Stack from './Stack';
import ToolbarButton from './ToolbarButton';
import Button from './Button';

import { IoIosApps, IoIosColorPalette } from 'react-icons/io';

const ToolbarScratchButton = ({
  isScratchActive,
  onToggleScratch,
  ...rest
}) => {
  const toggleButtonActive = {
    borderTopRightRadius: 'none',
    borderBottomRightRadius: 'none',
    zIndex: '1'
  };

  return (
    <Flex {...rest}>
      <Button
        variant={isScratchActive ? 'toolbarActive' : 'toolbar'}
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
          <Stack direction="row" spacing={1}>
            <ToolbarButton icon={IoIosApps} variant="tray" />
            <ToolbarButton icon={IoIosApps} variant="tray" />
            <ToolbarButton icon={IoIosApps} variant="tray" />
            <ToolbarButton icon={IoIosApps} variant="tray" />
          </Stack>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ToolbarScratchButton;
