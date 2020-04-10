import React from 'react';
import { configure, addParameters, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { Flex } from '../src/components/Styled/Base';
import ThemeProvider from '../src/components/Styled/ThemeProvider';
import Global from '../src/components/Styled/Global';

addParameters({
  options: {
    name: 'Benchmark',
    isFullscreen: false,
    showPanel: true,
    panelPosition: 'bottom',
    storySort: (a, b) => a[1].id.localeCompare(b[1].id)
  }
});

const withWrapper = storyFn => {
  return (
    <>
      <React.StrictMode>
        <Global />
        <ThemeProvider>
          <Flex
            id="wrapper"
            sx={{
              overflow: 'auto',
              width: '100%',
              height: '100%'
            }}
          >
            {storyFn()}
          </Flex>
        </ThemeProvider>
      </React.StrictMode>
    </>
  );
};

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /\.story\.js$/);

function loadStories() {
  addDecorator(withWrapper);
  addDecorator(withA11y);
  addDecorator(withKnobs);

  // hack to render functional components + hooks
  // without the need for a parent wrapper in the story
  // https://github.com/storybookjs/storybook/issues/5721#issuecomment-473869398
  addDecorator(Story => <Story />);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
