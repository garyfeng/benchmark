import React from 'react';
import { Flex } from '../Base';
import Slider from './Slider.js';

export default {
  title: 'Elements/Slider',
  component: Slider
};

export function Basic() {
  return (
    <Flex p="6" justifyConent="center" alignItems="center" label="container">
      <Slider min="1" max="1000" />
    </Flex>
  );
}
