import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import Global from "./Global";
import ThemeProvider from "./ThemeProvider.js";
import { Box, Text } from "./Box.js";
import Stack from "./Stack.js";
import Alert from "./Alert.js";

storiesOf("Styled System", module).add("Alert", () => {
  return (
    <Global>
      <ThemeProvider>
        <Stack spacing="3">
          <Alert>
            <Text fontWeight="extrabold" pb="2">
              You have reached the end of this section.
            </Text>
            <Text>
              It looks like you have not answered the following questions.
            </Text>
          </Alert>
          <Alert variant="success">
            <Text fontWeight="extrabold" pb="2">
              You have reached the end of this section.
            </Text>
            <Text>
              It looks like you have not answered the following questions.
            </Text>
          </Alert>
          <Alert variant="danger">
            <Text fontWeight="extrabold" pb="2">
              You have reached the end of this section.
            </Text>
            <Text>
              It looks like you have not answered the following questions.
            </Text>
          </Alert>
          <Alert variant="warning">
            <Text fontWeight="extrabold" pb="2">
              You have reached the end of this section.
            </Text>
            <Text>
              It looks like you have not answered the following questions.
            </Text>
          </Alert>
        </Stack>
      </ThemeProvider>
    </Global>
  );
});
