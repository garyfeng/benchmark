import React from 'react';
import css from './ExtendedText.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function ExtendedText({
  onChange,
  className,
  id,
  maxLength,
  onMaxLength,
  label,
  rows
}) {
  const classes = classnames(className, css.extendedtext);

  function checkLimit(event) {
    if (onChange) {
      onChange(event);
    }
    const value = event.target.value;
    const numChars = value.length || 0;
    if (numChars > maxLength) {
      if (onMaxLength) {
        onMaxLength();
      }
      event.target.value = value.substring(0, maxLength);
    }
  }

  return (
    <textarea
      id={id}
      aria-label={label}
      className={classes}
      onChange={checkLimit}
      rows={rows}
      autoComplete="off"
    />
  );
}

ExtendedText.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.number,
  maxLength: PropTypes.number,
  label: PropTypes.string.isRequired,
  onMaxLength: PropTypes.func
};

ExtendedText.defaultProps = {
  rows: 5,
  maxLength: 3000
};

export default ExtendedText;
