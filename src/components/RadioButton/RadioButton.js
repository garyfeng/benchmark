import React from 'react';
import { useId } from '@reach/auto-id';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Box } from '../Styled/Base';
import VisuallyHidden from '../Styled/VisuallyHidden';
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
    <Box
      role="radio"
      className={classes}
      aria-checked={checked}
      onClick={onClick}
    >
      <VisuallyHidden>
        <input
          tabIndex="0"
          id={inputId}
          type="radio"
          className={css.input}
          {...inputProps}
        />
      </VisuallyHidden>
      <Icon className={css.icon} iconName={icon} size="medium" />
    </Box>
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
