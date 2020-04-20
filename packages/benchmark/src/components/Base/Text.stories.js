import React from 'react';
import Stack from '../Stack';
import { Text } from './Base';

export default {
  title: 'Typography/Text',
  component: Text
};

export function Basic() {
  return (
    <Stack>
      <Text fontSize={1}>Size 1</Text>
      <Text fontSize={2}>Size 2</Text>
      <Text fontSize={3}>Size 3</Text>
      <Text fontSize={4}>Size 4</Text>
      <Text fontSize={5}>Size 5</Text>
      <Text fontSize={6}>Size 6</Text>
      <Text fontSize={7}>Size 7</Text>
    </Stack>
  );
}
