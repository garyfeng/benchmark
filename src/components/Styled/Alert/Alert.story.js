import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import { AllAlerts } from './examples';

storiesOf('Styled System', module).add('Alert', () => {
  return (
    <Global>
      <ThemeProvider>
        <AllAlerts />
      </ThemeProvider>
    </Global>
  );
});
