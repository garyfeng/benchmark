import React from 'react';
import Columns from '../Columns';
import Column from './Column';

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
