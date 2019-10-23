import React from 'react';
import css from './Paragraph.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Paragraph({ children, className, id }) {
  const classes = classnames(className, css.paragraph);

  return (
    <p className={classes} id={id}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string
};

Paragraph.defaultProps = {};

export default Paragraph;
