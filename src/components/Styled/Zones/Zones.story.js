import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import Zones from './Zones';
import imageFile from './examples/example01.svg';

storiesOf('Styled System', module).add('Zones', () => {
  const [selected, setSelected] = useState();

  return (
    <Global>
      <ThemeProvider>
        <Zones
          selected={selected}
          onChange={setSelected}
          onClear={() => setSelected()}
        >
          <Zones.Background width="301" height="301" src={imageFile}>
            <Zones.Choice type="circle" value="a" cx="100" cy="100" r="22" />
            <Zones.Choice type="circle" value="b" cx="200" cy="100" r="22" />
            <Zones.Choice type="circle" value="c" cx="100" cy="200" r="22" />
            <Zones.Choice type="circle" value="d" cx="200" cy="200" r="22" />
          </Zones.Background>
          <Zones.ClearButton />
        </Zones>
      </ThemeProvider>
    </Global>
  );
});
