import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

function PrimaryNavItem({ label, subNavItem, href }) {
  return (
    <li key={href}>
      <Link to={href}>
        <span>{label}</span>
      </Link>
      {subNavItem}
    </li>
  );
}

PrimaryNavItem.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
};

export default PrimaryNavItem;
