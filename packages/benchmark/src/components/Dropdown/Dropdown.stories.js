import React, { useState } from 'react';
import Stack from '../Stack';
import { Text, Box } from '../Base';
import Dropdown from './Dropdown.js';

export default {
  title: 'Item Types/Dropdown',
  component: Dropdown
};

export function Basic() {
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(true);

  function handleClick() {
    setOpen(!open);
  }

  function handleClickOutside() {
    setOpen(false);
  }

  return (
    <Stack direction="row" spacing="3">
      {/* DROPDOWN  */}
      <Dropdown
        isOpen={open}
        selected={selected}
        onSelect={setSelected}
        onClick={handleClick}
        onClickOutside={handleClickOutside}
      >
        <Box value="a">
          <Text>One Fish</Text>
        </Box>
        <Box value="b">
          <Text sx={{ textDecoration: 'underline' }}>Two</Text>
          <Text> Fish</Text>
        </Box>
        <Box value="c">
          <Text fontWeight="bold">Little Red</Text>
          <Text> Fish</Text>
        </Box>
        <Box value="d">
          <Text fontStyle="italic">Blue</Text>
          <Text> Fish</Text>
        </Box>
      </Dropdown>
      {/* END DROPDOWN  */}
    </Stack>
  );
}
