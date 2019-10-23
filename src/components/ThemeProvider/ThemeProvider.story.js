import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../Button';
import ThemeProvider from '../ThemeProvider';

storiesOf('ThemeProvider', module).add('Scoped Theming', () => {
  const style = {
    padding: '60px',
    width: '100%'
  };
  return (
    <div style={{ width: '100%' }}>
      <ThemeProvider>
        <div style={style}>
          <Button color="primary">Normal</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="primary" small>
            Small
          </Button>
        </div>
      </ThemeProvider>
      <ThemeProvider theme="Dark">
        <div style={style}>
          <Button color="primary">Normal</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="primary" small>
            Small
          </Button>
        </div>
      </ThemeProvider>
      <ThemeProvider theme="Beige">
        <div style={style}>
          <Button color="primary">Normal</Button>
          <Button color="secondary">Secondary</Button>
          <Button color="primary" small>
            Small
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
});
