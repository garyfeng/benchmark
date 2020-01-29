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
          maxChoices={2}
        >
          <SingleSelectChoice value="a">Option A</SingleSelectChoice>
          <SingleSelectChoice value="b">Option B</SingleSelectChoice>
          <SingleSelectChoice value="c">Option C</SingleSelectChoice>
        </SingleSelect>
      </ThemeProvider>
    </Global>
  );
});
