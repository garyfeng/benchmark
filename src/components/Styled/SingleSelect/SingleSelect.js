import React, { useContext, createContext } from 'react';
import PropTypes from 'prop-types';
import { useImmerReducer } from 'use-immer';
import { Option, Box, Flex, Stack, Button } from '../../../index.js';
import { reducer, initialState } from './SingleSelect.reducer';

// We create a SingleSelect context to enable communication between the
// parent <SingleSelect> it's <Option> children.
// This allows us the flexibility to house the <Option> components deep
// inside a nested layout.
const SingleSelectContext = createContext({
  selected: undefined,
  eliminated: [],
  isGroupDisabled: false,
  onClear: () => {},
  onChange: () => {},
  onEliminate: () => {}
});

function SingleSelect({
  id,
  children,
  isDisabled = false,
  selected,
  eliminated,
  onChange,
  onClear,
  onEliminate
}) {
  const [state, dispatch] = useImmerReducer(reducer, initialState);

  // fallback event handlers for when they are not
  // provided through props
  function handleChange(optionId) {
    dispatch({ type: 'MCSS_SELECT', payload: optionId });
  }
  function handleEliminate(optionId) {
    dispatch({ type: 'MCSS_ELIMINATE', payload: optionId });
  }
  function handleClear() {
    dispatch({ type: 'MCSS_CLEAR' });
  }

  selected = selected || state.selected;
  eliminated = eliminated || state.eliminated;
  onChange = onChange || handleChange;
  onEliminate = onEliminate || handleEliminate;
  onClear = onClear || handleClear;

  return (
    <SingleSelectContext.Provider
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
          <SingleSelectClear>Clean Answer</SingleSelectClear>
        </Stack>
      </Flex>
    </SingleSelectContext.Provider>
  );
}

export function SingleSelectChoice({ value, children, isDisabled }) {
  const {
    isGroupDisabled,
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
        isDisabled={isDisabled || isGroupDisabled}
      >
        {children}
      </Option>
    </Box>
  );
}

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
  const { onClear, isGroupDisabled } = useSingleSelectContext();
  return (
    <Box>
      <Button variant="secondary" disabled={isGroupDisabled} onClick={onClear}>
        {children === null ? 'Clear Answer' : children}
      </Button>
    </Box>
  );
}

SingleSelect.propTypes = {
  // dom
  id: PropTypes.string,
  children: PropTypes.node,
  isDisabled: PropTypes.bool,
  // data
  selected: PropTypes.string,
  eliminated: PropTypes.array,
  // events
  onClear: PropTypes.func,
  onChange: PropTypes.func,
  onEliminate: PropTypes.func
};

SingleSelect.Choice = SingleSelectChoice;
SingleSelect.ClearButton = SingleSelectClear;

export default SingleSelect;
