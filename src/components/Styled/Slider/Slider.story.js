import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '../../../util/hooks';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import { Flex } from '../Base';
import Slider from './Slider.js';

storiesOf('Slider', module).add('Slider', () => {
  return (
    <Global>
      <ThemeProvider>
        <Flex
          p="6"
          justifyConent="center"
          alignItems="center"
          label="container"
        >
          <Slider min="1" max="1000" />
        </Flex>
      </ThemeProvider>
    </Global>
  );
});
