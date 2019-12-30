import React from 'react';
import { storiesOf } from '@storybook/react';
import ThemeProvider from '../Styled/ThemeProvider';
import Global from '../Styled/Global';
import { AllTags } from '../Styled/Tag/examples';
import { AllAlerts } from '../Styled/Alert/examples';

storiesOf('Collections', module).add('Semantic Colors', () => {
  return (
    <Global>
      <ThemeProvider>
        <AllTags />
        <AllAlerts />
      </ThemeProvider>
    </Global>
  );
});
