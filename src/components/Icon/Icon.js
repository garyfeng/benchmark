import React from 'react';
import styles from './Icon.module.css';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import icons from './Icons.json';

function Icon({ iconName, size, className, color, label }) {
  return (
    <span
      aria-label={label}
      data-icon={icons[iconName]}
      className={classnames(
        className,
        styles.icon,
        styles[iconName],
        styles[size],
        { [styles[color]]: color }
      )}
    />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  iconName: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'huge']),
  color: PropTypes.oneOf(['muted', 'danger', 'success', 'warning'])
};

Icon.defaultProps = {
  iconName: 'question-circle'
};

Icon.types = Object.keys(icons);

export default Icon;
