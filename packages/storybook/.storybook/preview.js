import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, ThemeProvider, Flex, Box } from '@coreym/benchmark';

const withWrapper = storyFn => {
  return (
    <>
      <React.StrictMode>
        <Global />
        <ThemeProvider>
          <Box id="wrapper" padding="3">
            {storyFn()}
          </Box>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

addDecorator(withWrapper);
addParameters({
  options: {
    showRoots: true
  }
});
