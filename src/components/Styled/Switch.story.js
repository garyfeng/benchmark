import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '../../util/hooks.js';
import Global from './Global';
import ThemeProvider from './ThemeProvider.js';
import Switch from './Switch.js';
import Stack from './Stack.js';

storiesOf('Styled System', module).add('Switch', () => {
  const [checked, setChecked] = useToggle();
  return (
    <Global>
      <ThemeProvider>
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
      </ThemeProvider>
    </Global>
  );
});
