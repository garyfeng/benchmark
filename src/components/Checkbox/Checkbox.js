import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Box } from '../Styled/Base';
import VisuallyHidden from '../Styled/VisuallyHidden';
import Icon from '../Icon/Icon.js';
import css from './Checkbox.module.css';

function Checkbox({
  id,
  checked = false,
  disabled = false,
  itemId,
  value,
  onBlur,
  onClick,
  onChange,
  onFocus
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

  const classes = classnames(css.checkbox, {
    [css.disabled]: disabled
  });
  const inputId = `checkbox-${useId()}`;
  const icon = checked ? 'checkbox-selected' : 'checkbox-unselected';

  return (
    <Box
      id={id}
      role="checkbox"
      className={classes}
      aria-checked={checked}
      onClick={onClick}
    >
      <VisuallyHidden>
        <input
          tabIndex="0"
          id={inputId}
          type="checkbox"
          className={css.input}
          {...inputProps}
        />
      </VisuallyHidden>
      <Icon className={css.icon} iconName={icon} size="medium" />
    </Box>
  );
}

Checkbox.propTypes = {
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
  onChange: PropTypes.func
};

export default Checkbox;
