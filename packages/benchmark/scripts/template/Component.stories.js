import React from 'react';
import { storiesOf } from '@storybook/react';

import Component from './Component';

storiesOf('Component', module).add('Default', () => {
  return <Component>Hello World</Component>;
});
