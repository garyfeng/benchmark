import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from './Global';
import ThemeProvider from './ThemeProvider.js';
import Dropdown from './Dropdown.js';
import Stack from './Stack.js';
import { Text, Box } from './Box.js';

storiesOf('Styled System', module).add('Dropdown', () => {
  const [selected, setSelected] = useState('a');
  const [open, setOpen] = useState(false);

  function handleClick() {
    setOpen(!open);
  }

  return (
    <Global>
      <ThemeProvider>
        <Stack direction="row" spacing="3">
          {/* DROPDOWN  */}
          <Dropdown
            isOpen={open}
            selected={selected}
            onSelect={setSelected}
            onClick={handleClick}
          >
            <Box value="a">
              <Text>One Fish</Text>
            </Box>
            <Box value="b">
              <Text sx={{ textDecoration: 'underline' }}>Two</Text>
              <Text> Fish</Text>
            </Box>
            <Box value="c">
              <Text fontWeight="bold">Red</Text>
              <Text> Fish</Text>
            </Box>
            <Box value="d">
              <Text fontStyle="italic">Blue</Text>
              <Text> Fish</Text>
            </Box>
          </Dropdown>
          {/* END DROPDOWN  */}
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
