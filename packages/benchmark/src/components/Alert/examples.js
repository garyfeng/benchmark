import React from 'react';
import { Box, Text } from '../Base';
import Stack from '../Stack';
import Alert from './Alert';

export function AllAlerts() {
  return (
    <Stack spacing="3">
      <Box>
        <Alert>
          <Text fontWeight="extrabold" pb="2">
            You have reached the end of this section.
          </Text>
          <Text>
            It looks like you have not answered the following questions.
          </Text>
        </Alert>
      </Box>
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
  );
}
