import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import { SingleSelect, MultiSelect, DifferentLengths } from './examples';

storiesOf('MultipleChoice', module).add('Single Select', () => {
  return (
    <Global>
      <ThemeProvider>
        <SingleSelect />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('MultipleChoice', module).add('Multi Select', () => {
  return (
    <Global>
      <ThemeProvider>
        <MultiSelect />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('MultipleChoice', module).add('Different Lengths', () => {
  return (
    <Global>
      <ThemeProvider>
        <DifferentLengths />
      </ThemeProvider>
    </Global>
  );
});
