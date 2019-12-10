import React from 'react';
import Stack from '../Stack';
import { Box } from '../Base';

const ToolbarTray = ({ isOpen = true, children }) => {
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

export default ToolbarTray;
