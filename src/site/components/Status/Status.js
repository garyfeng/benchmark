import React from 'react';
import PropTypes from 'prop-types';

function Status({ status }) {
  return <div>{status}</div>;
}

Status.propTypes = {
  status: PropTypes.oneOf(['In Progress', 'Complete', 'Pending'])
};

export default Status;
