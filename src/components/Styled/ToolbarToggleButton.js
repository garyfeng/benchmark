import Button from './Button';
import React from 'react';
import { IoMdHelpCircle } from 'react-icons/io';

const ToolbarToggleButton = ({ icon, isActive, onClick, ...rest }) => {
  const Icon = icon;
  const activeStyle = {
    bg: 'blue.100',
    borderColor: 'blue.400',
    transition: 'background .2s,border-color .2s,color .2s',
    borderWidth: 1,
    ':hover': {
      bg: 'blue.50',
      borderColor: 'blue.300'
    }
  };

  return (
    <Button
      {...rest}
      variant="toolbar"
      onClick={onClick}
      sx={isActive ? activeStyle : null}
    >
      <Icon size="42" />
    </Button>
  );
};

ToolbarToggleButton.defaultProps = {
  icon: IoMdHelpCircle,
  direction: 'row',
  variant: 'toolbar'
};

export default ToolbarToggleButton;
