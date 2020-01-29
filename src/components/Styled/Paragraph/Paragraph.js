import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Base';

function Paragraph({ children, id }) {
  return (
    <Text as="p" mb="4" id={id} display="block">
      {children}
    </Text>
  );
}

Paragraph.propTypes = {
  id: PropTypes.string
};

export default Paragraph;
