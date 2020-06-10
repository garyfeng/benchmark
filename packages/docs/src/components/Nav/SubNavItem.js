import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function PrimarySubNavItem({ url, title }) {
  return (
    <li key={url}>
      <Link to={url}>
        <span>{title}</span>
      </Link>
    </li>
  );
}

PrimarySubNavItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default PrimarySubNavItem;
