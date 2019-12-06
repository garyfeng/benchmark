import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './Paragraph.module.css';

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
