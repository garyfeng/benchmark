import React from 'react';
import { storiesOf } from '@storybook/react';

import Paragraph from './Paragraph';

storiesOf('Typography', module).add('Paragraph', () => {
  return <Paragraph>Hello World</Paragraph>;
});
