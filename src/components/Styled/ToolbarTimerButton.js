import React from 'react';
import { Flex, Text } from './Box';
import Button from './Button';

import { IoIosTimer } from 'react-icons/io';

const ToolbarTimerButton = ({ isTimerActive, onToggleTimer, ...rest }) => {
  const toggleButtonActive = {
    borderRight: '1',
    borderColor: 'gray.400',
    borderRadius: 'default',
    borderTopRightRadius: 'none',
    borderBottomRightRadius: 'none',
    zIndex: '1',
    ':hover': {
      bg: 'white'
    }
  };

  return (
    <Flex {...rest}>
      <Button
        variant="toolbar"
        onClick={onToggleTimer}
        sx={isTimerActive ? toggleButtonActive : null}
      >
        <IoIosTimer size="42" />
      </Button>

      {isTimerActive ? (
        <Flex
          flexDirection="column"
          justifyContent="space-around"
          px={3}
          py={1}
          border={1}
          borderColor="gray.400"
          borderRadius="default"
          borderTopLeftRadius={0}
          borderBottomLeftRadius={0}
          borderLeft={0}
        >
          <Text
            fontSize={2}
            sx={{
              whiteSpace: 'nowrap'
            }}
          >
            Time Left:
          </Text>
          <Text
            fontSize={2}
            fontWeight="bold"
            sx={{
              whiteSpace: 'nowrap'
            }}
          >
            30 Minutes
          </Text>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default ToolbarTimerButton;
