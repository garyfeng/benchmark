import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../ThemeProvider';
import { AllTags } from '../Tag/examples';
import { AllAlerts } from '../Alert/examples';

storiesOf('Collections', module).add('Semantic Colors', () => {
  return (
    <ThemeProvider>
      <AllTags />
      <AllAlerts />
    </ThemeProvider>
  );
});
