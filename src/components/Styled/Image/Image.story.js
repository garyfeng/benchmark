import React from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import Image from './Image';

storiesOf('Image', module).add('Placeholder', () => {
  return (
    <Global>
      <ThemeProvider>
        <Image width="300" height="200" />
      </ThemeProvider>
    </Global>
  );
});
