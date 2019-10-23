import React from 'react';
import { storiesOf } from '@storybook/react';
import { debug } from '../../styles/mixins.module.css';

import Box from './Box';

storiesOf('Box', module).add('Website Layout', () => {
  return (
    <Box className={debug} grow={1} fill>
      <Box grow={1} justify="center">
        NAV
      </Box>
      <Box grow={4} direction="column">
        <Box grow={1} justify="center" align="center">
          Header
        </Box>
        <Box grow={5}>
          <Box grow={3}>Article Content</Box>
          <Box grow={1} justify="center">
            Aside
          </Box>
        </Box>
        <Box grow={1} justify="center" align="center">
          Footer
        </Box>
      </Box>
    </Box>
  );
});

storiesOf('Box', module).add('One Column', () => {
  return (
    <Box className={debug} grow={1} direction="column" fill>
      <Box justify="center" p={2}>
        Toolbar
      </Box>
      <Box grow={4} justify="center" align="center">
        Content
      </Box>
    </Box>
  );
});

storiesOf('Box', module).add('Two Column 50/50', () => {
  return (
    <Box className={debug} grow={1} direction="column" fill>
      <Box justify="center" p={2}>
        Toolbar
      </Box>
      <Box fill>
        <Box grow={1} justify="center" align="center">
          Content A
        </Box>
        <Box grow={1} justify="center" align="center">
          Content B
        </Box>
      </Box>
    </Box>
  );
});

storiesOf('Box', module).add('Two Column 40/60', () => {
  return (
    <Box className={debug} grow={1} direction="column" fill>
      <Box justify="center" p={2}>
        Toolbar
      </Box>
      <Box fill>
        <Box grow={4} justify="center" align="center">
          Content A
        </Box>
        <Box grow={6} justify="center" align="center">
          Content B
        </Box>
      </Box>
    </Box>
  );
});
