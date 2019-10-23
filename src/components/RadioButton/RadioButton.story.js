import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import RadioButton from './RadioButton';

storiesOf('Elements', module).add('Radio Button', () => {
  function Parent({ children }) {
    const [state, setState] = useState();
    return <div>{children(state, setState)}</div>;
  }

  return (
    <div>
      <Parent>
        {(state, setState) => (
          <div>
            <RadioButton
              value="a"
              name="radio"
              checked={state === 'a'}
              onChange={e => setState(e.target.value)}
            >
              Option A
            </RadioButton>
            <RadioButton
              value="b"
              name="radio"
              checked={state === 'b'}
              onChange={e => setState(e.target.value)}
            >
              Option B
            </RadioButton>
            <RadioButton
              disabled
              value="c"
              name="radio"
              checked={state === 'c'}
              onChange={e => setState(e.target.value)}
            >
              Disabled
            </RadioButton>
          </div>
        )}
      </Parent>
    </div>
  );
});
