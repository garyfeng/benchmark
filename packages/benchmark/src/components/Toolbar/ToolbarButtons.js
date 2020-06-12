import React from 'react';
import Button from '../Button';
import { Text } from '../Base';
import Icon from '../Icon';

export const ToolbarButton = ({
  children,
  icon = 'placeholder',
  size = 'md',
  ...rest
}) => {
  const iconSize = size === 'md' ? 42 : 32;

  return (
    <Button variant="toolbar" roving={true} {...rest}>
      {children || <Icon name={icon} size={iconSize} />}
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
      <Icon name="arrow-left" size="30px" />
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
      <Icon name="arrow-right" size="32px" />
    </Button>
  );
}

export default ToolbarButton;
