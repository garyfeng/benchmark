import React from 'react';
import { Flex, Text } from '../Base';
import Icon from '../Icon';
import { ToolbarToggleButton } from './ToolbarButtons.js';

const ToolbarTimerButton = ({ isTimerActive, onClickTimer, ...rest }) => {
  return (
    <Flex {...rest}>
      <ToolbarToggleButton
        title="Timer. Shows the time remaining."
        onClick={onClickTimer}
        isActive={isTimerActive}
        sx={
          isTimerActive && {
            bg: 'transparent',
            borderTopRightRadius: 'none',
            borderBottomRightRadius: 'none',
            borderColor: 'n.400',
            zIndex: '1',
            ':hover': {
              bg: 'white'
            }
          }
        }
      >
        <Icon size="42px" name="timer" />
      </ToolbarToggleButton>

      {isTimerActive ? (
        <Flex
          flexDirection="column"
          justifyContent="space-evenly"
          px={3}
          py={0}
          border={1}
          borderColor="n.400"
          borderRadius="md"
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
