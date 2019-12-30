import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';
import Button from '../Button';
import Stack from '../Stack';
import SingleSelectOptions from './SingleSelection';
import MultiSelectOptions from './MultiSelect';

function MultipleChoice({
  id,
  children,
  selected = [],
  eliminated = [],
  maxChoices = 1,
  onClear,
  onChange,
  onEliminate
}) {
  const Choices = maxChoices === 1 ? SingleSelectOptions : MultiSelectOptions;
  const choicesProps = { selected, eliminated, onChange, onEliminate };

  return (
    <Box id={id} display="inline-block">
      <Stack spacing="4">
        <Choices {...choicesProps}>{children}</Choices>
        <Box>
          <Button variant="secondary" onClick={onClear}>
            Clear Answer
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

MultipleChoice.propTypes = {
  // dom
  id: PropTypes.string,

  // data
  selected: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  eliminated: PropTypes.array,
  maxChoices: PropTypes.number,
  minChoices: PropTypes.number,

  // events
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onEliminate: PropTypes.func
};

export default MultipleChoice;
