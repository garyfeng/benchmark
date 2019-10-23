import React from 'react';
import css from './RadioButton.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon.js';

function RadioButton({
  checked,
  children,
  className,
  disabled,
  id,
  onBlur,
  onClick,
  onChange,
  onFocus,
  value
}) {
  const inputProps = {
    checked,
    disabled,
    id,
    onClick,
    onChange,
    onFocus,
    onBlur,
    value
  };

  const icon = checked ? 'radio-selected' : 'radio-unselected';
  const classes = classnames(className, css.radio, {
    [css.disabled]: disabled
  });

  return (
    <label className={classes}>
      <Icon className={css.icon} iconName={icon} size="medium" />
      <input type="radio" className={css.input} {...inputProps} />
      {children}
    </label>
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
