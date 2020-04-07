import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';
import { reducer, initialState } from './TextInput.reducer.js';

function TextInput({
  id,
  label,
  onChange,
  maxLength = 3000,
  onMaxLength,
  rows = 5,
  value
}) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // fallback event handlers for when they are not
  // provided through props
  function handleChange(value) {
    dispatch({ type: 'TEXTINPUT_UPDATE', value });
  }

  value = value || state.value;
  onChange = onChange || handleChange;

  function checkLimit(event) {
    const value = event.target.value;
    if (onChange) {
      onChange(value);
    }
    const numChars = value.length || 0;
    if (numChars > maxLength) {
      if (onMaxLength) {
        onMaxLength();
      }
      event.target.value = value.substring(0, maxLength);
    }
  }

  return (
    <Box
      as="textarea"
      id={id}
      width="100%"
      aria-label={label}
      onChange={checkLimit}
      rows={rows}
      autoComplete="off"
      value={value}
    />
  );
}

TextInput.propTypes = {
  id: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  label: PropTypes.string.isRequired,
  onMaxLength: PropTypes.func
};

export default TextInput;
