import React from 'react';
import Stack from '../Stack';
import { Box } from '../Box.js';
import Button from './Button.js';

export function Variants() {
  return (
    <Stack direction="row">
      <Button>Primary</Button>
      <Button disabled>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="secondary" disabled>
        Secondary
      </Button>
    </Stack>
  );
}

export function Secondary() {
  return <Stack direction="row"></Stack>;
}

export function Cases() {
  return (
    <Stack direction="row">
      <Button variant="secondary">Clear Answer</Button>
    </Stack>
  );
}

export function All() {
  return (
    <Stack>
      <Box>
        <Variants />
      </Box>
      {/* <Box></Box> */}
    </Stack>
  );
}

// export default { Primary, Secondary, Cases };
export default All;
