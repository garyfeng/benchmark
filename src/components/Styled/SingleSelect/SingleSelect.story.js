import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useArrayToggle } from '../../../util/hooks';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import SingleSelect, { SingleSelectChoice } from './SingleSelect';

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
        >
          <SingleSelectChoice value="a">Option A</SingleSelectChoice>
          <SingleSelectChoice value="b">Option B</SingleSelectChoice>
          <SingleSelectChoice value="c">Option C</SingleSelectChoice>
        </SingleSelect>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('SingleSelect', module).add('Option Disabled', () => {
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
        >
          <SingleSelectChoice value="a">Option A</SingleSelectChoice>
          <SingleSelectChoice value="b" isDisabled>
            Option B
          </SingleSelectChoice>
          <SingleSelectChoice value="c">Option C</SingleSelectChoice>
        </SingleSelect>
      </ThemeProvider>
    </Global>
  );
});

storiesOf('SingleSelect', module).add('Disabled', () => {
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
          isDisabled={true}
        >
          <SingleSelectChoice value="a">Option A</SingleSelectChoice>
          <SingleSelectChoice value="b">Option B</SingleSelectChoice>
          <SingleSelectChoice value="c">Option C</SingleSelectChoice>
        </SingleSelect>
      </ThemeProvider>
    </Global>
  );
});
