import React, { useContext, createContext } from 'react';
import Button from '../Button';
import Stack from '../Stack';
import { Box, Flex } from '../Base';
import Option from '../Option';

const SingleSelectContext = createContext({
  selected: [],
  eliminated: [],
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function useSingleSelectContext() {
  const context = useContext(SingleSelectContext);
  if (!context) {
    throw new Error(
      `Option compound components cannot be rendered outside the SingleSelect component`
    );
  }
  return context;
}

export function SingleSelectClear({ children }) {
  const { onClear } = useSingleSelectContext();
  return (
    <Box>
      <Button variant="secondary" onClick={onClear}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

function SingleSelect({
  id,
  children,
  selected = [],
  eliminated = [],
  onChange,
  onClear,
  onEliminate
}) {
  return (
    <SingleSelectContext.Provider
      value={{ selected, onClear, onChange, onEliminate, eliminated }}
    >
      <Flex id={id}>
        <Stack spacing={4}>
          <Stack>{children}</Stack>
          <SingleSelectClear>Clean Answer</SingleSelectClear>
        </Stack>
      </Flex>
    </SingleSelectContext.Provider>
  );
}

export function SingleSelectChoice({ value, children }) {
  const {
    selected,
    eliminated,
    onChange,
    onEliminate
  } = useSingleSelectContext();

  return (
    <Box>
      <Option
        variant="radio"
        isSelected={selected === value}
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

SingleSelect.Choice = SingleSelectChoice;

export default SingleSelect;
