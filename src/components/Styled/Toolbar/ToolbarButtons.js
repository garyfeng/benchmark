import React from 'react';
import {
  IoIosApps,
  IoMdArrowRoundBack,
  IoMdArrowRoundForward
} from 'react-icons/io';
import Button from '../Button';
import { Text } from '../Base';

export const ToolbarButton = ({ children, icon, size = 'md', ...rest }) => {
  const Icon = icon || IoIosApps;
  const iconSize = size === 'md' ? 42 : 32;

  return (
    <Button variant="toolbar" roving={true} {...rest}>
      {children || <Icon size={iconSize} />}
    </Button>
  );
};

export const ToolbarToggleButton = ({ isActive = false, sx, ...rest }) => {
  const isActiveStyle = {
    bg: 'blue.100',
    borderColor: 'blue.400',
    borderWidth: 1,
    ':hover': {
      bg: 'blue.50',
      borderColor: 'blue.300'
    },
    ':active': {
      bg: 'blue.200',
      borderColor: 'blue.700'
    },
    ...sx
  };

  return (
    <ToolbarButton
      aria-pressed={isActive ? 'true' : 'false'}
      sx={isActive && isActiveStyle}
      {...rest}
    />
  );
};

export function PrevButton({ ...rest }) {
  return (
    <Button variant="prev" flexShrink={0} roving={true} {...rest}>
      <IoMdArrowRoundBack size={30} />
    </Button>
  );
}

export function NextButton({ ...rest }) {
  return (
    <Button variant="next" flexShrink={0} roving={true} {...rest}>
      <Text
        // todo: add adjustments into base text component
        sx={{
          '::before': {
            content: "''",
            height: 0,
            display: 'block',
            mt: '-3px'
          }
        }}
      >
        Next
      </Text>
      <IoMdArrowRoundForward size={32} />
    </Button>
  );
}

export default ToolbarButton;
