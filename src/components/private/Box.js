import React from 'react';
import PropTypes from 'prop-types';
import css from './Box.css';

function Box({ figure, children }) {
  return <div className={css.grid}>{children}</div>;
}

Box.propTypes = {
  figure: PropTypes.bool
};

export default Box;
