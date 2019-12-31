import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import { GridCheckboxes, GridRadioButtons } from './examples';

storiesOf('Grid', module).add('Checkboxes', () => {
  return (
    <Global>
      <ThemeProvider>
        <GridCheckboxes />
      </ThemeProvider>
    </Global>
  );
});

storiesOf('Grid', module).add('RadioButtons', () => {
  return (
    <Global>
      <ThemeProvider>
        <GridRadioButtons />
      </ThemeProvider>
    </Global>
  );
});
