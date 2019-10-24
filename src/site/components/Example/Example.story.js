import React from 'react';
import { storiesOf } from '@storybook/react';

import Example from './Example.js';

storiesOf('Docs', module).add('Example', () => {
  return (
    <div>
      <Example renderTheme="Default">{`<div>Hello World</div>`}</Example>
      <Example renderTheme="Beige">{`<div>Hello World</div>`}</Example>
      <Example renderTheme="Dark">{`<div>Hello World</div>`}</Example>
    </div>
  );
});
