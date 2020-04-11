import React from 'react';
import { storiesOf } from '@storybook/react';
import { AllAlerts } from './examples';

storiesOf('Styled System', module).add('Alert', () => {
  return <AllAlerts />;
});
