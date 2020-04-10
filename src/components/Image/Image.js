import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text } from '../Base';

function Placeholder({ width = 100, height = 100, ...props }) {
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      color="n.300"
      sx={{
        bg: 'n.100',
        border: '1',
        borderColor: 'n.300',
        width: width + 'px',
        height: height + 'px'
      }}
      {...props}
    >
      <Text fontWeight="hairline">image</Text>
    </Flex>
  );
}

function Image({ src, ...props }) {
  if (!src) {
    return <Placeholder {...props} />;
  }
  return <Box as="img" {...props} />;
}

Image.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func
};

export default Image;
