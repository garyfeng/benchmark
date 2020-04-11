import React from 'react';
import { storiesOf } from '@storybook/react';
import { Flex } from '../Base';
import Slider from './Slider.js';

storiesOf('Slider', module).add('Slider', () => {
  return (
    <Flex p="6" justifyConent="center" alignItems="center" label="container">
      <Slider min="1" max="1000" />
    </Flex>
  );
});
