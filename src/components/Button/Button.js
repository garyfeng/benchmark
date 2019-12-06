import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './Button.module.css';

function Button({
  children,
  className,
  color,
  disabled,
  id,
  small,
  collapsed,
  toggled,
  type,
  onClick
}) {
  const buttonProps = {
    id,
    disabled,
    onClick
  };

  const classes = classnames(className, css.button, {
    [css.small]: small,
    [css.collapsed]: collapsed,
    [css[color]]: color,
    [css.toggled]: toggled,
    [css[type]]: type
  });

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,

  // styling
  color: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * The type of corner rounding.
   */
  type: PropTypes.oneOf(['rounded', 'circle', 'square']),
  /**
   * Render a small version of the button.
   */
  small: PropTypes.bool,
  collapsed: PropTypes.bool,
  toggled: PropTypes.bool,

  // events
  onClick: PropTypes.func
};

Button.propDescriptions = {
  color: 'The color of the button'
};

export default Button;
