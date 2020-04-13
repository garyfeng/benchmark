import React from 'react';
import { useArrayToggle } from '../../util/hooks';
import { Box } from '../Base';
import MultipleSelect, { MultipleSelectChoice } from './MultipleSelect';

export default {
  title: 'Item Types/MultiSelect',
  component: MultipleSelect
};

export function Basic() {
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
  );
}

export function Disabled() {
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
  );
}

export function OptionDisabled() {
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
  );
}

export function LongLabels() {
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
    <Box width="400px">
      <MultipleSelect
        onClear={() => resetSelected()}
        onEliminate={option => handleEliminate(option)}
        onChange={option => handleChange(option)}
        selected={selected}
        eliminated={eliminated}
        maxChoices={2}
      >
        <MultipleSelectChoice value="a">
          This is a really long label to test how well the text wraps
        </MultipleSelectChoice>
        <MultipleSelectChoice value="b">
          It is in a really small container
        </MultipleSelectChoice>
        <MultipleSelectChoice value="c">Small option</MultipleSelectChoice>
      </MultipleSelect>
    </Box>
  );
}
