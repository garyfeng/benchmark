import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import ThemeProvider from '../src/components/ThemeProvider/';
import css from './wrapper.css';
import { Box, Flex } from '../src/components/Styled/Box.js';

addParameters({
  options: {
    name: 'Benchmark',
    isFullscreen: false,
    showPanel: true,
    panelPosition: 'bottom',
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
});

const withThemeProvider = storyFn => {
  const themes = {
    Default: 'Default',
    Dark: 'Dark',
    Beige: 'Beige'
  };
  const theme = radios('Theme', themes, 'Default');

  return <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;
};

const withStoryStyles = storyFn => {
  return (
    <Box
      id="wrapper"
      sx={{
        overflow: 'auto',
        width: '100%',
        height: '100%'
      }}
    >
      <Flex>{storyFn()}</Flex>
    </Box>
  );
};

const withStrictMode = storyFn => {
  return <React.StrictMode>{storyFn()}</React.StrictMode>;
};

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  addDecorator(withStrictMode);
  addDecorator(withA11y);
  addDecorator(withKnobs);
  addDecorator(withStoryStyles);
  addDecorator(withThemeProvider);

  // hack to render functional components + hooks
  // without the need for a parent wrapper in the story
  // https://github.com/storybookjs/storybook/issues/5721#issuecomment-473869398
  addDecorator(Story => <Story />);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
