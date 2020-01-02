import React, { useContext, createContext } from 'react';
import Button from '../Button';
import { Box } from '../Base';
import Option from '../Option';

const MultipleSelectContext = createContext({
  selected: [],
  eliminated: [],
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function useMultipleSelectContext() {
  const context = useContext(MultipleSelectContext);
  if (!context) {
    throw new Error(
      `Option compound components cannot be rendered outside the MultipleSelect component`
    );
  }
  return context;
}

function MultipleSelect({
  id,
  children,
  selected = [],
  eliminated = [],
  onChange,
  onClear,
  onEliminate
}) {
  return (
    <MultipleSelectContext.Provider
      value={{ selected, onClear, onChange, onEliminate, eliminated }}
    >
      <Box id={id}>{children}</Box>
    </MultipleSelectContext.Provider>
  );
}

export function ClearButton({ children }) {
  const { onClear } = useMultipleSelectContext();
  return (
    <Box>
      <Button variant="secondary" onClick={onClear}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

export function Choice({ value, children }) {
  const {
    selected,
    eliminated,
    onChange,
    onEliminate
  } = useMultipleSelectContext();

  return (
    <Box>
      <Option
        variant="checkbox"
        isSelected={selected.includes(value)}
        isEliminated={eliminated.includes(value)}
        onChange={onChange}
        onEliminate={onEliminate}
        value={value}
      >
        {children}
      </Option>
    </Box>
  );
}

MultipleSelect.Choice = Choice;
MultipleSelect.ClearButton = ClearButton;

export default MultipleSelect;
