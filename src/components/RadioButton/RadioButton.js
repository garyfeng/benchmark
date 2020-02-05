import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Button from '../Styled/Button';
import Icon from '../Icon/Icon.js';
import css from './RadioButton.module.css';

function RadioButton({
  checked,
  disabled,
  onBlur,
  onClick,
  onChange,
  onFocus,
  label,
  value,
  ...props
}) {
  const inputProps = {
    checked,
    disabled,
    onClick,
    onChange,
    onFocus,
    onBlur,
    value
  };

  const classes = classnames(css.radio, {});
  const inputId = `radio-${useId()}`;
  const icon = checked ? 'radio-selected' : 'radio-unselected';

  return (
    <Button
      role="radio"
      id={inputId}
      label={label}
      className={classes}
      aria-checked={checked}
      variant="bare"
      {...inputProps}
      {...props}
    >
      <Icon className={css.icon} iconName={icon} size="medium" />
    </Button>
  );
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onClick: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

RadioButton.defaultProps = {
  checked: false
};

export default RadioButton;
