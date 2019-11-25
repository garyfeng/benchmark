import Stack from './Stack';
import React from 'react';
import { Box } from 'rebass';

const defaultProps = {
  isOpen: true
};

const ToolbarTray = ({ isOpen, children }) => {
  return (
    <Box display={isOpen ? 'block' : 'none'}>
      <Stack
        alignItems="center"
        display="none"
        spacing={1}
        padding={1}
        bg="white"
        direction="row"
      >
        {children}
      </Stack>
    </Box>
  );
};

ToolbarTray.defaultProps = defaultProps;

export default ToolbarTray;
