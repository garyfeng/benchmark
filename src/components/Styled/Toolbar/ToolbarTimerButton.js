import React from 'react';
import { IoIosTimer } from 'react-icons/io';
import { Flex, Text } from '../Box';
import Button from '../Button';

const ToolbarTimerButton = ({ isTimerActive, onClickTimer, ...rest }) => {
  const toggleButtonActive = {
    borderRight: '1',
    borderColor: 'n.400',
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
      {/* todo: compose from another button */}
      <Button
        title="Timer. Shows the time remaining."
        variant="toolbar"
        roving={true}
        onClick={onClickTimer}
        sx={isTimerActive ? toggleButtonActive : null}
      >
        <IoIosTimer size="42" />
      </Button>

      {isTimerActive ? (
        <Flex
          flexDirection="column"
          justifyContent="space-evenly"
          px={3}
          py={0}
          border={1}
          borderColor="n.400"
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
            role="timer"
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
