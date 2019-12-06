import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import css from './Flex.module.css';

function Box({
  children,
  className,
  id,
  style = {},
  grow,
  p,
  direction,
  fill,
  justify,
  align
}) {
  const padding = `p${p}`;
  const classes = classnames(className, css.flex, {
    [css.fill]: fill,
    [css[padding]]: p
  });
  const flexStyle = {
    ...style,
    flexGrow: grow,
    flexDirection: direction,
    justifyContent: justify,
    alignItems: align
  };

  return (
    <div className={classes} id={id} style={flexStyle}>
      {children}
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  grow: PropTypes.number,
  direction: PropTypes.oneOf([
    'row',
    'row-reverse',
    'column',
    'column-reverse'
  ]),
  align: PropTypes.oneOf([
    'stretch',
    'flex-start',
    'flex-end',
    'center',
    'baseline'
  ]),
  wrap: PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
  justify: PropTypes.oneOf([
    'flex-start',
    'flex-end',
    'center',
    'space-between',
    'space-around',
    'space-evenly'
  ]),
  inline: PropTypes.bool
};

Box.defaultProps = {};

export default Box;
