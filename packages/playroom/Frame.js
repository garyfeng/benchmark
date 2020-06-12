import React from 'react';
import { ThemeProvider, Global, Box } from '@coreym/benchmark';

export default ({ theme, children }) => (
  <>
    <Global />
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh' }}>{children}</Box>
    </ThemeProvider>
  </>
);
