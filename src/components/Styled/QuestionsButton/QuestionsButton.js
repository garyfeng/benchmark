import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '../Base';
import Button from '../Button';
import Icon from '../Icon';

function QuestionsButton({ isOpen = false, onClick }) {
  return (
    <Button variant="primary" p="2" onClick={onClick}>
      <Flex
        sx={{
          transform: isOpen ? 'rotate(180deg) translateZ(0)' : null,
          transition: 'transform .5s ease,-webkit-transform .5s ease'
        }}
      >
        <Icon size="2em" name="chevron-circle-down" />
      </Flex>
      <Flex flexDirection="column" alignItems="flex-start" pl="2">
        <Text
          fontWeight="light"
          textAlign="left"
          lineHeight="1"
          letterSpacing="1px"
        >
          {isOpen ? 'Hide' : 'Show'} <br />
          Questions
        </Text>
      </Flex>
    </Button>
  );
}

QuestionsButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func
};

export default QuestionsButton;
