import React from 'react';
import PropTypes from 'prop-types';
import { Text, Box, Flex, Stack, ThemeProvider } from '@coreym/benchmark';

function ColorSwatch({ color, name, border }) {
  return (
    <Box
      display="inline-flex"
      overflow="hidden"
      boxShadow="lg"
      mr="3"
      mb="3"
      borderRadius="lg"
    >
      <Flex flexDirection="column">
        <ThemeProvider>
          <Flex width="150px" height="100px" bg={color}></Flex>
        </ThemeProvider>
        <Stack p="2" backgroundColor="n.25">
          <Text fontSize="1" strong type="muted">
            {name}
          </Text>
          <Text fontSize="1">{color}</Text>
        </Stack>
      </Flex>
    </Box>
  );
}

ColorSwatch.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  // todo: remove need for this prop
  // calculate automatically
  border: PropTypes.bool,
};

ColorSwatch.defaultProps = {};

export default ColorSwatch;
