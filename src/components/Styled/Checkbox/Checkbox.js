import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon.js';
import Button from '../Button';

function Checkbox({
  id,
  checked = false,
  disabled = false,
  onChange,
  value,
  ...props
}) {
  const inputId = `checkbox-${useId()}`;
  const icon = checked ? 'checkbox-selected' : 'checkbox-unselected';

  return (
    <Button
      role="checkbox"
      variant="bare"
      id={inputId}
      aria-checked={checked}
      onClick={() => onChange(value)}
      disabled={disabled}
      {...props}
    >
      <Icon iconName={icon} size="medium" sx={{ opactity: '.3' }} />
    </Button>
  );
}

Checkbox.propTypes = {
  // dom
  id: PropTypes.string,
  disabled: PropTypes.bool,

  // data
  checked: PropTypes.bool,

  // events
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func
};

export default Checkbox;
