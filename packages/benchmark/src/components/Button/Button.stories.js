import React from 'react';
import Stack from '../Stack';
import Button from '../Button';
import ScrollButton from '../ScrollButton';
import {
  ToolbarButton,
  ToolbarToggleButton,
  NextButton,
  PrevButton
} from '../Toolbar/ToolbarButtons.js';
import ToolbarGroup from '../Toolbar/ToolbarGroup.js';
import ToolbarScratchButton from '../Toolbar/ToolbarScratchButton.js';
import ToolbarTimerButton from '../Toolbar/ToolbarTimerButton.js';
import { Box, Flex } from '../Base';

export default {
  title: 'Elements/Button',
  component: Button
};

export function Basic() {
  return (
    <Stack spacing={3} p="3">
      <Stack spacing="2" direction="row">
        <Button>Primary</Button>
        <Button disabled>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="secondary" disabled>
          Secondary
        </Button>
      </Stack>
      <Stack>
        <Box>
          <Button variant="secondary">Clear Answer</Button>
        </Box>
      </Stack>
      <Stack direction="row">
        <Box>
          <ScrollButton />
        </Box>
        <Box>
          <ScrollButton disabled />
        </Box>
        <Box>
          <ScrollButton direction="up" />
        </Box>
        <Box>
          <ScrollButton direction="up" disabled />
        </Box>
      </Stack>

      <Stack direction="row" bg="n.100" p={1}>
        <PrevButton />
        <PrevButton disabled />
        <NextButton />
        <NextButton disabled />
      </Stack>

      <Flex bg="n.100" p={1}>
        <ToolbarButton />
        <ToolbarButton disabled={true} />
      </Flex>
      <Flex bg="n.100">
        <ToolbarGroup>
          <ToolbarButton />
          <ToolbarButton />
          <ToolbarButton />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton />
          <ToolbarButton />
        </ToolbarGroup>
        <ToolbarGroup>
          <ToolbarButton />
        </ToolbarGroup>
      </Flex>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarToggleButton isActive={false} />
        <ToolbarToggleButton isActive={true} />
        <ToolbarToggleButton isActive={false} disabled />
        <ToolbarToggleButton isActive={true} disabled />
      </Stack>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarScratchButton isScratchActive={false} />
        <ToolbarScratchButton
          title="Scratchwork. Turns on scratchwork mode. This lets you write on the screen. You must turn scratchwork off to answer questions."
          isScratchActive={true}
        >
          <ToolbarToggleButton
            id="pencil-btn"
            title="Pencil. Turns on write mode. This lets you write on the screen."
            size="sm"
          />
          <ToolbarToggleButton
            id="highlighter-btn"
            title="Highlighter. Turns on highlight mode. This lets you highlight parts of the screen."
            size="sm"
          />
          <ToolbarToggleButton
            id="eraser-btn"
            title="Eraser. Turns on erase mode. This lets you erase any of your drawings and highlights."
            size="sm"
          />
          <ToolbarButton
            id="clear-scratch-btn"
            title="Clear Scratchwork. Clears all scratchwork on the screen."
            size="sm"
          />
        </ToolbarScratchButton>
      </Stack>
      <Stack direction="row" bg="n.100" p={1}>
        <ToolbarTimerButton isTimerActive={false} />
        <ToolbarTimerButton isTimerActive={true} />
      </Stack>
    </Stack>
  );
}
