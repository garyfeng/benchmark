import React from 'react';
import Column from './Column';
import Columns from '../Columns';

export default {
  title: 'Layout/Column',
  column: Column
};

export function Basic() {
  return (
    <Columns>
      <Column>Column A</Column>
      <Column>Column B</Column>
    </Columns>
  );
}
