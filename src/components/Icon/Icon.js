import React from 'react';
import Svg from '../SVG';
import icons from './icons';

function Icon({
  name,
  size = '1em',
  focusable = false,
  color = 'currentColor',
  role = 'presentation'
}) {
  // fallback to question icon if name is not found
  const icon = icons[name] || icons['question-circle'];
  const { path, viewBox = '0 0 24 24' } = icon;

  return (
    <Svg
      as="svg"
      size={size}
      color={color}
      display="inline-block"
      verticalAlign="middle"
      viewBox={viewBox}
      focusable={focusable}
      role={role}
    >
      {path}
    </Svg>
  );
}

export default Icon;
