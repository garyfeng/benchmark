import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';
import ThemeProvider from './ThemeProvider.js';
import { Box } from './Box.js';
import Stack from './Stack.js';
import Tag from './Tag.js';

storiesOf('Styled System', module).add('Tag', () => {
  return (
    <Global>
      <ThemeProvider>
        <Stack direction="row" p="3">
          <Box>
            <Tag>Primary</Tag>
          </Box>
          <Box>
            <Tag variant="success">Success</Tag>
          </Box>
          <Box>
            <Tag variant="warning">Warning</Tag>
          </Box>
          <Box>
            <Tag variant="danger">Danger</Tag>
          </Box>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
