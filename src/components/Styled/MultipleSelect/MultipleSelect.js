import React, { useContext, createContext } from 'react';
import Button from '../Button';
import { Box, Flex } from '../Base';
import Option from '../Option';
import Stack from '../Stack';

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

export function MultipleSelectChoice({ value, children }) {
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
      <Flex id={id}>
        <Stack spacing={4}>
          <Stack>{children}</Stack>
          <ClearButton>Clean Answer</ClearButton>
        </Stack>
      </Flex>
    </MultipleSelectContext.Provider>
  );
}

MultipleSelect.Choice = MultipleSelectChoice;

export default MultipleSelect;
