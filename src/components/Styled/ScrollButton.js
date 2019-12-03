import React from 'react';
import Button from './Button.js';
import { Text } from './Box.js';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

function ScrollButton({ direction = 'down' }) {
  const Label = direction === 'down' ? 'More' : 'Top';
  const Icon = direction === 'down' ? FaChevronDown : FaChevronUp;

  return (
    <Button
      flexDirection={direction === 'down' ? 'column' : 'column-reverse'}
      // todo: change to "primary-dark"
      bg="blue.700"
      justifyContent="flex-end"
      sx={{
        height: '66px',
        width: '66px',
        borderRadius: 'full'
      }}
    >
      <Text fontSize="2" fontWeight="normal">
        {Label}
      </Text>
      <Icon size="24" />
    </Button>
  );
}

export default ScrollButton;
