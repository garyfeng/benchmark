import React from 'react';
import { GridCheckboxes, GridRadioButtons } from './examples';
import Grid from './Grid.js';

export default {
  title: 'Item Types/Grid',
  component: Grid
};

export function Checkboxes() {
  return <GridCheckboxes />;
}

export function Radios() {
  return <GridRadioButtons />;
}
