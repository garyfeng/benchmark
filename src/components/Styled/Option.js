import React from 'react';
import { Flex, Text } from './Box.js';
import Button from './Button.js';
import {
  MdRadioButtonUnchecked,
  MdRadioButtonChecked,
  MdRemoveCircleOutline,
  MdAddCircleOutline
} from 'react-icons/md';

function Choice({
  children,
  isSelected = false,
  isEliminated = false,
  isDisabled = false,
  onEliminate,
  value,
  onChange,
  ...props
}) {
  function handleEliminate(e, value) {
    onEliminate(value);
    e.stopPropagation();
  }
  return (
    <Flex
      {...props}
      border="2"
      cursor="pointer"
      borderRadius="lg"
      borderColor="gray.300"
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'opacity .2s, border .2s, color .2s',
        ':hover': {
          borderColor: isEliminated ? null : 'blue.300'
        }
      }}
    >
      <Flex
        flexGrow="1"
        onClick={() => onChange(value)}
        opacity={isEliminated ? '50%' : '100%'}
      >
        <Flex bg="blue.100" px="3" py="3" alignItems="center">
          <Button variant="bare">
            {isSelected ? (
              <MdRadioButtonChecked size="28" />
            ) : (
              <MdRadioButtonUnchecked size="28" />
            )}
          </Button>
        </Flex>
        <Flex px="3" py="3" flexGrow="1" alignItems="center">
          <Text>{children}</Text>
        </Flex>
      </Flex>
      {/* ELIMINATE BUTTON */}
      <Flex px="3" py="3" alignContent="center" alignItems="center">
        <Button
          variant="bare"
          color="gray.700"
          onClick={e => handleEliminate(e, value)}
        >
          {isEliminated ? (
            <MdAddCircleOutline size="28" />
          ) : (
            <MdRemoveCircleOutline size="28" />
          )}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Choice;
