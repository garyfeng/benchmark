import React from 'react';
import Stack from '../Stack';

export default function SingleSelection({
  children,
  selected = [],
  eliminated = [],
  onChange,
  onEliminate
}) {
  return (
    <Stack>
      {React.Children.map(children, child => {
        let { value } = child.props;
        let isSelected = selected.includes(value);
        let isEliminated = eliminated.includes(value);

        return React.cloneElement(child, {
          onChange: value => onChange([value]),
          onEliminate,
          isSelected,
          isEliminated,
          type: 'radio'
        });
      })}
    </Stack>
  );
}
