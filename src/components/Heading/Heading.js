import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './Heading.module.css';

function Heading({ children, className, id, level = 1 }) {
  const classes = classnames(className, css[`level${level}`]);
  const H = 'h' + level;

  return (
    <H className={classes} id={id}>
      {children}
    </H>
  );
}

Heading.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6])
};

export default Heading;
