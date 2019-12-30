import React from 'react';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import Button from '../Button';
import RadioButton from '../../RadioButton';
import Checkbox from '../../Checkbox';
import VisuallyHidden from '../VisuallyHidden';
import { Flex, Text } from '../Base';

function Choice({
  children,
  isSelected = false,
  isEliminated = false,
  isDisabled = false,
  type = 'radio',
  value,
  onEliminate,
  onChange,
  ...props
}) {
  function handleEliminate(e, value) {
    onEliminate(value);
    e.stopPropagation();
  }

  function handleClick(e, value) {
    if (!isDisabled) {
      onChange(value);
      e.stopPropagation();
    }
  }

  const Input = type === 'radio' ? RadioButton : Checkbox;

  return (
    <Flex
      {...props}
      data-testid="option-element"
      border="2"
      borderRadius="lg"
      borderColor="n.300"
      disabled={isEliminated}
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
        onClick={e => handleClick(e, value)}
        opacity={isEliminated ? '50%' : '100%'}
      >
        <Flex bg="blue.100" px="3" py="3" alignItems="center">
          <Input
            checked={isSelected}
            disabled={isDisabled}
            onChange={onChange}
          />
        </Flex>
        <Flex px="3" py="3" flexGrow="1" alignItems="center">
          <Text fontSize={3}>{children}</Text>
        </Flex>
      </Flex>
      {/* ELIMINATE BUTTON */}
      <Flex px="3" py="3" alignContent="center" alignItems="center">
        <Button
          variant="bare"
          color="n.700"
          onClick={e => handleEliminate(e, value)}
        >
          {isEliminated ? (
            <>
              <VisuallyHidden>Enable Option</VisuallyHidden>
              <MdAddCircleOutline size="28" />
            </>
          ) : (
            <>
              <VisuallyHidden>Eliminate Option</VisuallyHidden>
              <MdRemoveCircleOutline size="28" />
            </>
          )}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Choice;
