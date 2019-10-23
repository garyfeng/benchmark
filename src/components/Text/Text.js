import React from 'react';
import css from './Text.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Text({ children, className, id, strong, type, underline, italic }) {
  const classes = classnames(className, {
    [css.strong]: strong,
    [css.underline]: underline,
    [css.italic]: italic,
    [css[type]]: type
  });

  return (
    <span className={classes} id={id}>
      {children}
    </span>
  );
}

Text.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(['muted', 'danger', 'success', 'warning']),
  strong: PropTypes.bool,
  underline: PropTypes.bool,
  italic: PropTypes.bool
};

export default Text;
