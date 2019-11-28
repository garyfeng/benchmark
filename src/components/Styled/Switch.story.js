import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';
import ThemeProvider from './ThemeProvider.js';
import Switch from './Switch.js';

storiesOf('Styled System', module).add('Switch', () => {
  const [checked, setChecked] = useState(false);
  return (
    <Global>
      <ThemeProvider>
        <Switch checked={checked} onClick={() => setChecked(!checked)} />
      </ThemeProvider>
    </Global>
  );
});
