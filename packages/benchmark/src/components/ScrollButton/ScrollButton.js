import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import { Text } from '../Base';

function ScrollButton({ direction = 'down', ...props }) {
  const Label = direction === 'down' ? 'More' : 'Top';
  const icon = direction === 'down' ? 'chevron-down' : 'chevron-up';

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
      <Icon name={icon} size="24px" />
    </Button>
  );
}

export default ScrollButton;
