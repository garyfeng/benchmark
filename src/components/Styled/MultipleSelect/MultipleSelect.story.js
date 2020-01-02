import React from 'react';
import { storiesOf } from '@storybook/react';
import { useArrayToggle } from '../../../util/hooks';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import Stack from '../Stack';
import MultipleSelect from './MultipleSelect';

storiesOf('MultipleSelect', module).add('MultipleSelect', () => {
  const [selected, toggleSelected, resetSelected] = useArrayToggle();
  const [eliminated, toggleEliminated] = useArrayToggle();

  function handleEliminate(value) {
    toggleEliminated(value);
    if (selected.includes(value)) {
      toggleSelected(value);
    }
  }

  function handleChange(value) {
    toggleSelected(value);
    if (eliminated.includes(value)) {
      toggleEliminated(value);
    }
  }

  return (
    <Global>
      <ThemeProvider>
        <MultipleSelect
          onClear={() => resetSelected()}
          onEliminate={option => handleEliminate(option)}
          onChange={option => handleChange(option)}
          selected={selected}
          eliminated={eliminated}
          maxChoices={2}
        >
          <Stack spacing={4}>
            <Stack>
              <MultipleSelect.Choice value="a">Option A</MultipleSelect.Choice>
              <MultipleSelect.Choice value="b">Option B</MultipleSelect.Choice>
              <MultipleSelect.Choice value="c">Option C</MultipleSelect.Choice>
            </Stack>
            <MultipleSelect.ClearButton>
              Clean Answer
            </MultipleSelect.ClearButton>
          </Stack>
        </MultipleSelect>
      </ThemeProvider>
    </Global>
  );
});
