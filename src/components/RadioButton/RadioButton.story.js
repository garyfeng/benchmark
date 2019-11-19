import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import RadioButton from './RadioButton';

storiesOf('Elements', module).add('Radio Button', () => {
  const [selected, setSelected] = useState();

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div role="radiogroup">
      <RadioButton
        value="a"
        name="radio"
        checked={selected === 'a'}
        onChange={handleChange}
      >
        Option A
      </RadioButton>
      <RadioButton
        value="b"
        name="radio"
        checked={selected === 'b'}
        onChange={handleChange}
      >
        Option B
      </RadioButton>
      <RadioButton
        disabled
        value="c"
        name="radio"
        checked={selected === 'c'}
        onChange={handleChange}
      >
        Disabled
      </RadioButton>
    </div>
  );
});
