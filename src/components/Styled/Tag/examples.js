import React from 'react';
import { Box } from '../Base';
import Stack from '../Stack';
import Tag from './Tag.js';

export function AllTags() {
  return (
    <Stack direction="row" p="3">
      <Box>
        <Tag>Primary</Tag>
      </Box>
      <Box>
        <Tag variant="success">Success</Tag>
      </Box>
      <Box>
        <Tag variant="warning">Warning</Tag>
      </Box>
      <Box>
        <Tag variant="danger">Danger</Tag>
      </Box>
    </Stack>
  );
}
