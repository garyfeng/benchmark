import React from 'react';
import Stack from '../Stack';

export default function SingleSelection({
  children,
  selected = [],
  eliminated = [],
  onChange,
  onEliminate
}) {
  function handleSelect(value, selected) {
    if (!selected.includes(value)) {
      onChange([...selected, value]);
    } else {
      onChange(selected.filter(i => i !== value));
    }
  }
  return (
    <Stack>
      {React.Children.map(children, child => {
        let { value } = child.props;
        let isSelected = selected.includes(value);
        let isEliminated = eliminated.includes(value);

        return React.cloneElement(child, {
          onChange: value => handleSelect(value, selected),
          onEliminate,
          isSelected,
          isEliminated,
          type: 'checkbox'
        });
      })}
    </Stack>
  );
}
