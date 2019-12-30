import React, { useState } from 'react';
import MultipleChoice from './MultipleChoice.js';
import Option from './Option.js';

export const SingleSelect = () => {
  const [selected, setSelected] = useState([]);
  const [eliminated, setEliminated] = useState([]);

  function handleEliminate(value) {
    if (!eliminated.includes(value)) {
      setEliminated([...eliminated, value]);
    } else {
      setEliminated(eliminated.filter(i => i !== value));
    }
    setSelected(selected.filter(i => i !== value));
  }

  function handleChange(value) {
    setSelected(value);
    setEliminated(eliminated.filter(i => !value.includes(i)));
  }

  return (
    <MultipleChoice
      onClear={() => setSelected()}
      onEliminate={option => handleEliminate(option)}
      onChange={option => handleChange(option)}
      selected={selected}
      eliminated={eliminated}
      maxChoices={1}
    >
      <Option value="a">Option A</Option>
      <Option value="b">Option B</Option>
      <Option value="c">Option C</Option>
    </MultipleChoice>
  );
};

export const MultiSelect = () => {
  const [selected, setSelected] = useState([]);
  const [eliminated, setEliminated] = useState([]);

  function handleEliminate(value) {
    if (!eliminated.includes(value)) {
      setEliminated([...eliminated, value]);
    } else {
      setEliminated(eliminated.filter(i => i !== value));
    }
    setSelected(selected.filter(i => i !== value));
  }

  function handleChange(value) {
    setSelected(value);
    setEliminated(eliminated.filter(i => !value.includes(i)));
  }

  return (
    <MultipleChoice
      onClear={() => setSelected()}
      onEliminate={option => handleEliminate(option)}
      onChange={option => handleChange(option)}
      selected={selected}
      eliminated={eliminated}
      maxChoices={2}
    >
      <Option value="a">Option A</Option>
      <Option value="b">Option B</Option>
      <Option value="c">Option C</Option>
    </MultipleChoice>
  );
};
