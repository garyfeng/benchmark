import React, { createContext, useContext } from 'react';
import { Box } from '../Base';
import Button from '../Button';
import Checkbox from '../Checkbox';
import RadioButton from '../../RadioButton';

const GridContext = createContext({
  response: {},
  clearResponse: () => {},
  updateResponse: () => {}
});

function useResponseContext() {
  const context = useContext(GridContext);
  if (!context) {
    throw new Error(
      `Grid compound components cannot be rendered outside the Grid component`
    );
  }
  return context;
}

function Grid({ children }) {
  const [response, setResponse] = React.useState({});

  function updateResponse(value) {
    setResponse(value);
  }

  function clearResponse() {
    setResponse({});
  }

  return (
    <GridContext.Provider value={{ response, clearResponse, updateResponse }}>
      <Box>{children}</Box>
    </GridContext.Provider>
  );
}

function GridClearButton({ children }) {
  const { clearResponse } = useResponseContext();

  function handleClick() {
    clearResponse();
  }

  return (
    <Box>
      <Button variant="secondary" onClick={handleClick}>
        {children}
      </Button>
    </Box>
  );
}

function GridCheckbox({ inputId }) {
  const { response, updateResponse } = useResponseContext();
  const checked = response[inputId] || false;

  function handleClick() {
    return updateResponse({ ...response, [inputId]: !checked });
  }

  return (
    <Box>
      <Checkbox checked={checked} onClick={handleClick} onChange={() => {}} />
    </Box>
  );
}

function GridRadio({ inputId, groupId }) {
  const { response, updateResponse } = useResponseContext();
  const value = response[groupId];
  const checked = value === inputId;

  function handleClick() {
    updateResponse({ ...response, [groupId]: inputId });
  }

  return (
    <Box>
      <RadioButton
        checked={checked}
        onClick={handleClick}
        onChange={() => {}}
      />
    </Box>
  );
}

Grid.Checkbox = GridCheckbox;
Grid.Radio = GridRadio;
Grid.ClearButton = GridClearButton;

export default Grid;
