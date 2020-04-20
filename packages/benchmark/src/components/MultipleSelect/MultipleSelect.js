import React, { useContext, createContext } from 'react';
import Button from '../Button';
import { Box, Flex } from '../Base';
import Option from '../Option';
import Stack from '../Stack';

const MultipleSelectContext = createContext({
  selected: [],
  eliminated: [],
  isGroupDisabled: false,
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
  isDisabled = false,
  onChange,
  onClear,
  onEliminate
}) {
  return (
    <MultipleSelectContext.Provider
      value={{
        selected,
        isGroupDisabled: isDisabled,
        onClear,
        onChange,
        onEliminate,
        eliminated
      }}
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

export function ClearButton({ children }) {
  const { onClear, isGroupDisabled } = useMultipleSelectContext();
  return (
    <Box>
      <Button variant="secondary" onClick={onClear} disabled={isGroupDisabled}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

export function MultipleSelectChoice({ value, children, isDisabled }) {
  const {
    selected,
    eliminated,
    onChange,
    onEliminate,
    isGroupDisabled
  } = useMultipleSelectContext();

  return (
    <Box>
      <Option
        variant="checkbox"
        isDisabled={isDisabled || isGroupDisabled}
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

MultipleSelect.Choice = MultipleSelectChoice;

export default MultipleSelect;
