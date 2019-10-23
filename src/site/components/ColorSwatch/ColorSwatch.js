import React from 'react';
import css from './ColorSwatch.module.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../../../components/Text';

function ColorSwatch({ children, className, id, color, name, border }) {
  const classes = classnames(className, css.colorSwatch, {
    [css.border]: border
  });

  const bgStyle = { backgroundColor: `var(${color})` };

  return (
    <div className={classes} id={id}>
      <div className={css.color} style={bgStyle}></div>
      <div className={css.details}>
        <div>
          <Text strong type="muted">
            {name}
          </Text>
        </div>
        <div>
          <Text>{color}</Text>
        </div>
      </div>
    </div>
  );
}

ColorSwatch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  // todo: remove need for this prop
  // calculate automatically
  border: PropTypes.bool
};

ColorSwatch.defaultProps = {};

export default ColorSwatch;
