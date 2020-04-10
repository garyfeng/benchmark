import React from 'react';
import { useId } from '@reach/auto-id';
import { MdRemoveCircleOutline, MdAddCircleOutline } from 'react-icons/md';
import Button from '../Button';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { Flex, Text } from '../Base';

function Choice({
  children,
  isSelected = false,
  isEliminated = false,
  isDisabled = false,
  variant = 'radio',
  label,
  value,
  onEliminate,
  onChange,
  ...props
}) {
  if (typeof children === 'string' && !label) {
    label = children;
  }

  const optionId = `option-${useId()}`;

  function handleEliminate(event, value) {
    onEliminate(value);
    // prevent onChange event from firing on the
    // parent container component
    if (event) {
      event.stopPropagation();
    }
  }

  function handleClick(event, value) {
    if (!isDisabled) {
      onChange(value);
      event.stopPropagation();
    }
  }

  function handleChange(event) {
    if (!isDisabled) {
      onChange(value);
      event.stopPropagation();
    }
  }

  const EliminateIcon = isEliminated
    ? MdAddCircleOutline
    : MdRemoveCircleOutline;
  const InputControl = variant === 'radio' ? RadioButton : Checkbox;

  return (
    <Flex
      {...props}
      data-testid="option-element"
      border="2"
      borderRadius="lg"
      borderColor="n.300"
      disabled={isEliminated}
      onClick={e => handleClick(e, value)}
      sx={{
        cursor: 'pointer',
        overflow: 'hidden',
        transition: 'opacity .2s, border .2s, color .2s',
        ':hover': {
          borderColor: isEliminated || isDisabled ? null : 'p.400'
        }
      }}
    >
      {/* ELIMINATED STYLING CONTAINER */}
      <Flex flexGrow="1" opacity={isEliminated ? '50%' : '100%'}>
        {/* CHECKBOX / RADIO BUTTON */}
        <Flex bg="blue.100" px="3" py="3" flexShrink="0" alignItems="center">
          <InputControl
            checked={isSelected}
            disabled={isDisabled}
            onChange={handleChange}
            size="24"
            label={label}
            aria-labelledby={optionId}
          />
        </Flex>

        {/* TEXT / LABEL */}
        <Flex
          px="3"
          py="3"
          flexGrow="1"
          alignItems="center"
          sx={{ opacity: isDisabled ? '.5' : null }}
        >
          <Text id={optionId} fontSize={3}>
            {children}
          </Text>
        </Flex>
      </Flex>

      {/* ELIMINATE BUTTON */}
      <Flex
        px="3"
        py="3"
        flexShrink="0"
        alignContent="center"
        alignItems="center"
      >
        <Button
          variant="bare"
          onClick={e => handleEliminate(e, value)}
          disabled={isDisabled}
          color="n.600"
          sx={{
            transition: 'color .2s',
            ':hover': {
              color: 'n.800'
            }
          }}
        >
          <VisuallyHidden>
            {isEliminated ? 'Enable' : 'Eliminate'} Option
          </VisuallyHidden>
          {isEliminated ? (
            <Icon name="eliminate-selected" size="24" />
          ) : (
            <Icon name="eliminate-unselected" size="24" />
          )}
          {/* <EliminateIcon size="28" /> */}
        </Button>
      </Flex>
    </Flex>
  );
}

export default Choice;
