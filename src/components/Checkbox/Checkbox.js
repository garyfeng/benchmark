import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon/Icon.js';
import Button from '../Styled/Button';
import css from './Checkbox.module.css';

function Checkbox({ id, checked = false, disabled = false, ...props }) {
  const classes = classnames(css.checkbox, {
    [css.disabled]: disabled
  });

  const inputId = `checkbox-${useId()}`;
  const icon = checked ? 'checkbox-selected' : 'checkbox-unselected';

  return (
    <Button
      role="checkbox"
      variant="bare"
      id={inputId}
      className={classes}
      aria-checked={checked}
      disabled={disabled}
      {...props}
    >
      <Icon className={css.icon} iconName={icon} size="medium" />
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
