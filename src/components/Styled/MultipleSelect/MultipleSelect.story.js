import React from 'react';
import { storiesOf } from '@storybook/react';
import { useArrayToggle } from '../../../util/hooks';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import MultipleSelect, { MultipleSelectChoice } from './MultipleSelect';

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
          <MultipleSelectChoice value="a">Option A</MultipleSelectChoice>
          <MultipleSelectChoice value="b">Option B</MultipleSelectChoice>
          <MultipleSelectChoice value="c">Option C</MultipleSelectChoice>
        </MultipleSelect>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('MultipleSelect', module).add('Disabled', () => {
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
          isDisabled={true}
          maxChoices={2}
        >
          <MultipleSelectChoice value="a">Option A</MultipleSelectChoice>
          <MultipleSelectChoice value="b">Option B</MultipleSelectChoice>
          <MultipleSelectChoice value="c">Option C</MultipleSelectChoice>
        </MultipleSelect>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('MultipleSelect', module).add('Option Disabled', () => {
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
          <MultipleSelectChoice value="a" isDisabled={true}>
            Option A
          </MultipleSelectChoice>
          <MultipleSelectChoice value="b">Option B</MultipleSelectChoice>
          <MultipleSelectChoice value="c">Option C</MultipleSelectChoice>
        </MultipleSelect>
      </ThemeProvider>
    </Global>
  );
});
