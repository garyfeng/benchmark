import React from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Button from './Button.js';
import { Text } from './Box.js';

function ScrollButton({ direction = 'down', ...props }) {
  const Label = direction === 'down' ? 'More' : 'Top';
  const Icon = direction === 'down' ? FaChevronDown : FaChevronUp;

  return (
    <Button
      variant="primary"
      flexDirection={direction === 'down' ? 'column' : 'column-reverse'}
      bg="p.700"
      justifyContent="flex-end"
      sx={{
        height: '66px',
        width: '66px',
        borderRadius: 'full'
      }}
      {...props}
    >
      <Text fontSize="2" fontWeight="normal">
        {Label}
      </Text>
      <Icon size="24" />
    </Button>
  );
}

export default ScrollButton;
