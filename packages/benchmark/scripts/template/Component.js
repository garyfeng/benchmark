import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';

function Component({ children, id }) {
  return <Box id={id}>{children}</Box>;
}

Component.propTypes = {
  id: PropTypes.string
};

export default Component;
