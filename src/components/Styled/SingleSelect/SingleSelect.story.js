import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useArrayToggle } from '../../../util/hooks';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import Stack from '../Stack';
import SingleSelect from './SingleSelect';

storiesOf('SingleSelect', module).add('SingleSelect', () => {
  const [selected, setSelected] = useState();
  const [eliminated, toggleEliminated] = useArrayToggle();

  function handleEliminate(value) {
    toggleEliminated(value);
    if (selected === value) {
      setSelected();
    }
  }

  function handleChange(value) {
    setSelected(value);
    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return (
    <Global>
      <ThemeProvider>
        <SingleSelect
          onClear={() => setSelected()}
          onEliminate={option => handleEliminate(option)}
          onChange={option => handleChange(option)}
          selected={selected}
          eliminated={eliminated}
          maxChoices={2}
        >
          <Stack spacing={4}>
            <Stack>
              <SingleSelect.Choice value="a">Option A</SingleSelect.Choice>
              <SingleSelect.Choice value="b">Option B</SingleSelect.Choice>
              <SingleSelect.Choice value="c">Option C</SingleSelect.Choice>
            </Stack>
            <SingleSelect.ClearButton>Clean Answer</SingleSelect.ClearButton>
          </Stack>
        </SingleSelect>
      </ThemeProvider>
    </Global>
  );
});
