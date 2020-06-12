import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '../Base';

function Paragraph({ children, id, ...props }) {
  return (
    <Text mb="4" id={id} display="block" {...props}>
      {children}
    </Text>
  );
}

Paragraph.propTypes = {
  id: PropTypes.string
};

export default Paragraph;
