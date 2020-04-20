import React from 'react';
import css from './Component.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Component({ children, className, id }) {
  const classes = classnames(className, css.component);

  return (
    <div className={classes} id={id}>
      {children}
    </div>
  );
}

Component.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

Component.defaultProps = {};

export default Component;
