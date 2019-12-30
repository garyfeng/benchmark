import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import { AllTags } from './examples';

storiesOf('Styled System', module).add('Tag', () => {
  return (
    <Global>
      <ThemeProvider>
        <AllTags />
      </ThemeProvider>
    </Global>
  );
});
