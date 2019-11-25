import React from 'react';
import { Text } from 'rebass';
import { Box, Flex } from './Box.js';
// import { Flex } from 'rebass';
// import { Icon } from './Icon.js';
import Icon from '../Icon';
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdRemoveCircleOutline
} from 'react-icons/md';
import styled from '@emotion/styled';
import css from '@styled-system/css';

const Option = styled('div')(
  css({
    border: 2,
    borderColor: 'gray.300',
    cursor: 'pointer',
    borderRadius: 'md',
    overflow: 'hidden',
    '&:hover': {
      borderColor: 'blue.300'
    }
  })
);

function Choice({ children, selected = false, isDisabled = false, ...props }) {
  const icon = selected ? MdRadioButtonChecked : MdRadioButtonUnchecked;

  return (
    <Flex
      {...props}
      border="2"
      cursor="pointer"
      borderRadius="default"
      borderColor="gray.300"
    >
      <Flex bg="blue.100" p="3" alignItems="center" alignContent="middle">
        <Box size="32" as={icon} />
      </Flex>
      <Flex p="3" flexGrow="1">
        <Text>{children}</Text>
      </Flex>
      <Flex p="3" alignContent="center" alignItems="center">
        <Box color="gray.500" size="32" as={MdRemoveCircleOutline} />
      </Flex>
    </Flex>
  );
}

export default Choice;
