import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Global from "./Global";
import ThemeProvider from "./ThemeProvider.js";
import { Box, Text, Flex } from "./Box.js";
import { color } from "styled-system";
import Stack from "./Stack.js";
import Tag from "./Tag.js";

storiesOf("Styled System", module).add("Tag", () => {
  return (
    <Global>
      <ThemeProvider>
        <Stack>
          <Box>
            <Tag variant="success">Success</Tag>
          </Box>
          <Box>
            <Tag variant="warning">Warning</Tag>
          </Box>
          <Box>
            <Tag variant="danger">Danger</Tag>
          </Box>
          <Box>
            <Tag>Priamry</Tag>
          </Box>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
