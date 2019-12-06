import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';

import Zones from './Zones';

import example01 from './examples/example01.json';
import imageFile from './examples/example01.svg';

example01.background.src = imageFile;

const { background, zones } = example01;

storiesOf('Styled System', module).add('Zones', () => {
  const [selected, setSelected] = useState();

  return (
    <Global>
      <ThemeProvider>
        <Zones
          background={background}
          zones={zones}
          selected={selected}
          onSelect={optionId => {
            setSelected(optionId);
          }}
          onClear={() => setSelected(null)}
        />
      </ThemeProvider>
    </Global>
  );
});
