import React from 'react';
import { storiesOf } from '@storybook/react';

import { useArrayToggle } from '../../../util/hooks';
import Checkbox from './Checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => {
  const [selected, setSelected] = useArrayToggle(['b']);

  return (
    <div role="group">
      <Checkbox
        value="a"
        name="radio"
        checked={selected.includes('a')}
        onChange={value => setSelected(value)}
      >
        Option A
      </Checkbox>
      <Checkbox
        value="b"
        name="radio"
        checked={selected.includes('b')}
        onChange={value => setSelected(value)}
      >
        Option B
      </Checkbox>
      <Checkbox
        disabled
        value="c"
        name="radio"
        checked={selected.includes('c')}
        onChange={value => setSelected(value)}
      >
        Disabled
      </Checkbox>
    </div>
  );
});
