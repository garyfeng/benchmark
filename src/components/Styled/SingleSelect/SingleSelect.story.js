import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { useArrayToggle } from '../../../util/hooks';
import ThemeProvider from '../ThemeProvider';
import Global from '../Global';
import { Box } from '../Base';
import SingleSelect, { SingleSelectChoice } from './SingleSelect';

storiesOf('SingleSelect', module).add('SingleSelect', () => {
  return (
    <Global>
      <ThemeProvider>
        <SingleSelect>
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

storiesOf('SingleSelect', module).add('Long Labels', () => {
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
        <Box width="400px">
          <SingleSelect
            onClear={() => setSelected()}
            onEliminate={option => handleEliminate(option)}
            onChange={option => handleChange(option)}
            selected={selected}
            eliminated={eliminated}
          >
            <SingleSelectChoice value="a">
              This is a really long label to test how well the text wraps
            </SingleSelectChoice>
            <SingleSelectChoice value="b">
              It is in a really small container
            </SingleSelectChoice>
            <SingleSelectChoice value="c">Small option</SingleSelectChoice>
          </SingleSelect>
        </Box>
      </ThemeProvider>
    </Global>
  );
});
