import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Base';

function Columns({ children, id }) {
  return <Flex id={id}>{children}</Flex>;
}

Columns.propTypes = {
  id: PropTypes.string
};

export default Columns;
