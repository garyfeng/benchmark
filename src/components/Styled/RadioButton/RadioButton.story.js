import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Global, ThemeProvider } from '../../../index.js';
import RadioButton from './RadioButton.js';

storiesOf('RadioButton', module).add('RadioButton', () => {
  const [selected, setSelected] = useState('a');

  return (
    <Global>
      <ThemeProvider>
        <div role="radiogroup">
          <RadioButton
            value="a"
            name="radio"
            checked={selected === 'a'}
            onChange={setSelected}
          >
            Option A
          </RadioButton>
          <RadioButton
            value="b"
            name="radio"
            checked={selected === 'b'}
            onChange={setSelected}
          >
            Option B
          </RadioButton>
          <RadioButton
            disabled
            value="c"
            name="radio"
            checked={selected === 'c'}
            onChange={setSelected}
          >
            Disabled
          </RadioButton>
        </div>
      </ThemeProvider>
    </Global>
  );
});
