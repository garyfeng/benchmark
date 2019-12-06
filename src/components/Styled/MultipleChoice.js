import React from 'react';
import PropTypes from 'prop-types';
import { Box } from './Box';
import Button from './Button';
import Stack from './Stack';

function MultipleChoice({
  children,
  className,
  id,
  onClear,
  onChange,
  onEliminate,
  selected,
  eliminated
}) {
  return (
    <Box id={id}>
      <Stack spacing="4">
        <Stack spacing="2">
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              onChange,
              onEliminate,
              isSelected: child.props.value === selected,
              isEliminated: eliminated.includes(child.props.value)
            });
          })}
        </Stack>
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
  className: PropTypes.string,
  id: PropTypes.string,
  selected: PropTypes.string,
  onChange: PropTypes.func,
  onClear: PropTypes.func,
  onEliminate: PropTypes.func,
  eliminated: PropTypes.array
};

MultipleChoice.defaultProps = {
  eliminated: []
};

export default MultipleChoice;
