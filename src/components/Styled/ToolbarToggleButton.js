import Button from './Button';
import React from 'react';
import { IoMdHelpCircle } from 'react-icons/io';

const ToolbarToggleButton = ({
  icon,
  isActive,
  onClick,
  disabled,
  ...rest
}) => {
  const Icon = icon;

  return (
    <Button
      {...rest}
      variant={isActive ? 'toolbarActive' : 'toolbar'}
      onClick={onClick}
      disabled={disabled}
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
