import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import Button from '../Button';
import Icon from '../Icon';

function RadioButton({
  checked = false,
  disabled,
  onBlur,
  onClick,
  onChange,
  onFocus,
  label,
  value,
  size,
  ...props
}) {
  const inputProps = {
    checked,
    disabled,
    onFocus,
    onBlur,
    value
  };

  const inputId = `radio-${useId()}`;
  const icon = checked ? 'radio-selected' : 'radio-unselected';

  return (
    <Button
      role="radio"
      id={inputId}
      label={label}
      aria-checked={checked}
      color="text"
      variant="bare"
      onClick={() => onChange(value)}
      {...inputProps}
      {...props}
    >
      <Icon name={icon} size={size} />
    </Button>
  );
}

RadioButton.propTypes = {
  // dom
  id: PropTypes.string,
  disabled: PropTypes.bool,

  // data
  checked: PropTypes.bool,
  value: PropTypes.string,

  // events
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired
};

export default RadioButton;
