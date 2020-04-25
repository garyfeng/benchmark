import React from 'react';
import { storiesOf } from '@storybook/react';

import LiveCodeBlock from './LiveCodeBlock.js';

storiesOf('Docs', module).add('LiveCodeBlock', () => {
  return (
    <div>
      <LiveCodeBlock renderTheme="Default">{`<div>Hello World</div>`}</LiveCodeBlock>
      <LiveCodeBlock renderTheme="Beige">{`<div>Hello World</div>`}</LiveCodeBlock>
      <LiveCodeBlock renderTheme="Dark">{`<div>Hello World</div>`}</LiveCodeBlock>
    </div>
  );
});
