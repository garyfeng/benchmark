import React from 'react';
import Slider from './Slider.js';

export default {
  title: 'Elements/Slider',
  component: Slider
};

export function Basic() {
  return <Slider min="1" max="1000" />;
}
