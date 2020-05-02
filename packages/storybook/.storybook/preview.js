import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, ThemeProvider, Flex, Box } from '@coreym/benchmark';

const withWrapper = storyFn => {
  return (
    <>
      <React.StrictMode>
        <Global />
        <ThemeProvider>
          <Flex id="wrapper" padding="3" width="100%" height="100%">
            {/* 
            We use a Box here so that block based components 
            such as Paragraph will display correctly. 
            */}
            <Box>{storyFn()}</Box>
          </Flex>
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
