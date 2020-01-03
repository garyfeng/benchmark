import React, { useContext, createContext } from 'react';
import Button from '../Button';
import { Box } from '../Base';
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
      <Box id={id}>{children}</Box>
    </SingleSelectContext.Provider>
  );
}

export function ClearButton({ children }) {
  const { onClear } = useSingleSelectContext();
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
  } = useSingleSelectContext();

  return (
    <Box>
      <Option
        variant="radio"
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

SingleSelect.Choice = Choice;
SingleSelect.ClearButton = ClearButton;

export default SingleSelect;
