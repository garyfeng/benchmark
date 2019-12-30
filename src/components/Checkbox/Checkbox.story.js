import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import Checkbox from './Checkbox';

storiesOf('Classic', module).add('Elements: Checkbox', () => {
  const [selected, setSelected] = useState('a');

  function handleChange(e) {
    setSelected(e.target.value);
  }

  return (
    <div role="group">
      <Checkbox
        value="a"
        name="radio"
        checked={selected === 'a'}
        onChange={handleChange}
      >
        Option A
      </Checkbox>
      <Checkbox
        value="b"
        name="radio"
        checked={selected === 'b'}
        onChange={handleChange}
      >
        Option B
      </Checkbox>
      <Checkbox
        disabled
        value="c"
        name="radio"
        checked={selected === 'c'}
        onChange={handleChange}
      >
        Disabled
      </Checkbox>
    </div>
  );
});
