import React from 'react';
import { storiesOf } from '@storybook/react';

import Tag from './Tag';

storiesOf('Other', module).add('Tag', () => {
  return <Tag type="success">Hello World</Tag>;
});
