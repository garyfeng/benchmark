import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global.js';
import ThemeProvider from './ThemeProvider.js';
import Heading from './Heading';

storiesOf('Styled System', module).add('Heading', () => {
  return (
    <Global>
      <ThemeProvider>
        <Heading>Heading 1</Heading>
        <Heading level={2}>Heading 2</Heading>
        <Heading level={3}>Heading 3</Heading>
        <Heading level={4}>Heading 4</Heading>
        <Heading level={5}>Heading 5</Heading>
        <Heading level={6}>Heading 6</Heading>
      </ThemeProvider>
    </Global>
  );
});
