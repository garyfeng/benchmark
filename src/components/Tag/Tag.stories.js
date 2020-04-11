import React from 'react';
import { storiesOf } from '@storybook/react';
import { AllTags } from './examples';

storiesOf('Styled System', module).add('Tag', () => {
  return <AllTags />;
});
