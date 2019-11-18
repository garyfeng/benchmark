import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';

import { ThemeProvider } from './Box';
import Choice from './Choice.js';
import Stack from './Stack.js';
import theme from './theme.js';
import Option from './Option.js';

storiesOf('Styled System', module).add('Default', () => {
  return (
    <Global>
      <ThemeProvider theme={theme}>
        <Stack spacing="3">
          <Option selected={false}>Midnight</Option>
          <Option selected={true}>Cocoa</Option>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
