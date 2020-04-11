import React from 'react';
import { storiesOf } from '@storybook/react';
import { GridCheckboxes, GridRadioButtons } from './examples';

storiesOf('Grid', module).add('Checkboxes', () => {
  return <GridCheckboxes />;
});

storiesOf('Grid', module).add('RadioButtons', () => {
  return <GridRadioButtons />;
});
