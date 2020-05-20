import React from 'react';
import { Flex } from '../Base';
import Stack from '../Stack';
import Icon from '../Icon';
import { ToolbarToggleButton } from './ToolbarButtons.js';

const ToolbarScratchButton = ({
  isScratchActive,
  onClickScratch,
  children,
  ...rest
}) => {
  return (
    <Flex {...rest}>
      <ToolbarToggleButton
        id="scratchwork-btn"
        title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
        isActive={isScratchActive}
        onClick={onClickScratch}
        sx={
          isScratchActive && {
            borderTopRightRadius: 'none',
            borderBottomRightRadius: 'none',
            zIndex: '1'
          }
        }
      >
        <Icon size="42px" name="scratchwork" />
      </ToolbarToggleButton>

      {isScratchActive && (
        <Flex
          bg="white"
          p={1}
          flex={1}
          border={1}
          borderColor="blue.400"
          borderRadius="md"
          borderTopLeftRadius="none"
          borderBottomLeftRadius={0}
          borderLeft={0}
        >
          <Stack direction="row" spacing={1}>
            {children}
          </Stack>
        </Flex>
      )}
    </Flex>
  );
};

export default ToolbarScratchButton;
