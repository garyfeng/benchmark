import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from './Paragraph';

storiesOf('Classic', module).add('Typography: Paragraph', () => {
  return <Paragraph>Hello World</Paragraph>;
});
