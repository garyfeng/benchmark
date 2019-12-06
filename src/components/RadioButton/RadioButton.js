import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon.js';
import css from './RadioButton.module.css';

function RadioButton({
  checked,
  children,
  disabled,
  onBlur,
  onClick,
  onChange,
  onFocus,
  value
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

  const classes = classnames(css.radio, {
    [css.disabled]: disabled
  });
  const inputId = `radio-${useId()}`;
  const icon = checked ? 'radio-selected' : 'radio-unselected';

  return (
    <div role="radio" aria-checked={checked}>
      <label className={classes} htmlFor={inputId}>
        <input
          tabIndex="0"
          id={inputId}
          type="radio"
          className={css.input}
          {...inputProps}
        />
        <Icon className={css.icon} iconName={icon} size="medium" />
        {children}
      </label>
    </div>
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
