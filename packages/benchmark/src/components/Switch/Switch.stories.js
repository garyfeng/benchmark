import React from 'react';
import { useToggle } from '../../util/hooks';
import Stack from '../Stack';
import Switch from './Switch.js';

export default {
  title: 'Elements/Switch',
  component: Switch
};

export function Basic() {
  const [checked, setChecked] = useToggle();
  return (
    <Stack spacing="4">
      <Stack direction="row">
        <Switch checked={true} />
        <Switch checked={false} />
        <Switch checked={false} disabled />
      </Stack>
      <Stack direction="row">
        <Switch checked={checked} onClick={setChecked} />
      </Stack>
    </Stack>
  );
}
