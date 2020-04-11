import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { Global, ThemeProvider, Flex } from '../src/index.js';

const withWrapper = storyFn => {
  return (
    <>
      <React.StrictMode>
        <Global />
        <ThemeProvider>
          <Flex
            id="wrapper"
            sx={{
              overflow: 'auto',
              width: '100%',
              height: '100%'
            }}
          >
            {storyFn()}
          </Flex>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

addDecorator(withWrapper);
addParameters({
  options: {
    showRoots: false
  }
});
