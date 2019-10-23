import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios } from '@storybook/addon-knobs';

import Icon from './Icon';

storiesOf('Elements', module).add('Icon', () => {
  const sizes = {
    Small: 'small',
    Medium: 'medium',
    Large: 'large',
    Huge: 'huge'
  };
  const size = radios('Size', sizes, 'medium');

  const style = {
    display: 'flex'
  };

  return (
    <div style={style}>
      {Icon.types.map(icon => {
        return (
          <span style={{ padding: '20px' }} key={icon}>
            <Icon iconName={icon} size={size} />
          </span>
        );
      })}
    </div>
  );
});
