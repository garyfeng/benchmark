import React from 'react';
import Stack from '../Stack';
import { Box, Flex } from '../Base';

const defaultProps = {
  isOpen: true
};

const ToolbarTray = ({ isOpen, button, draw }) => {
  return (
    <Flex border={1} borderColor="blue.300" borderRadius={4} overflow="hidden">
      {button}
      <Box display={isOpen ? 'block' : 'none'}>
        <Stack alignItems="center" display="none" spacing={1} direction="row">
          {draw}
        </Stack>
      </Box>
    </Flex>
  );
};

ToolbarTray.defaultProps = defaultProps;

export default ToolbarTray;
