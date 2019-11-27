import React from 'react';
import { Flex } from './Box';
import Stack from './Stack';
import ToolbarButton from './ToolbarButton';
import Button from './Button';

import { IoIosApps, IoIosColorPalette } from 'react-icons/io';

const ToolbarScratchButton = ({ isScratchActive, onClickScratch, ...rest }) => {
  const toggleButtonActive = {
    borderTopRightRadius: 'none',
    borderBottomRightRadius: 'none',
    zIndex: '1'
  };

  return (
    <Flex {...rest}>
      <Button
        id="scratchwork-btn"
        title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
        variant={isScratchActive ? 'toolbarActive' : 'toolbar'}
        onClick={onClickScratch}
        sx={isScratchActive ? toggleButtonActive : null}
      >
        <IoIosColorPalette size="42" />
      </Button>

      {isScratchActive ? (
        <Flex
          bg="white"
          p={1}
          // flex={1}
          border={1}
          borderColor="blue.400"
          borderRadius="default"
          borderTopLeftRadius="none"
          borderBottomLeftRadius={0}
          borderLeft={0}
        >
          <Stack direction="row" spacing={1}>
            <ToolbarButton
              id="pencil-btn"
              title="Pencil. Turns on write mode. This lets you write on the screen."
              icon={IoIosApps}
              variant="tray"
            />
            <ToolbarButton
              id="highlighter-btn"
              title="Highlighter. Turns on highlight mode. This lets you highlight parts of the screen."
              icon={IoIosApps}
              variant="tray"
            />
            <ToolbarButton
              id="eraser-btn"
              title="Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights."
              icon={IoIosApps}
              variant="tray"
            />
            <ToolbarButton
              id="clear-scratch-btn"
              title="Clear Scratchwork. Clears all scratchwork on the screen."
              icon={IoIosApps}
              variant="tray"
            />
          </Stack>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ToolbarScratchButton;
