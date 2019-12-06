import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './Tag.module.css';

function Tag({ children, className, id, type }) {
  const classes = classnames(className, css.tag, {
    [css[type]]: type
  });

  return (
    <span className={classes} id={id}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  type: PropTypes.oneOf(['success', 'warning', 'danger'])
};

Tag.defaultProps = {};

export default Tag;
