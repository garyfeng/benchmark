import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Box } from '../Base';
import TextInput from './TextInput';

storiesOf('TextInput', module).add('TextInput', () => {
  let [value, setValue] = useState('');
  const maxLength = number('Maximum Length', 3000);
  const rows = number('Rows', 5);
  const label = text('Label', 'Item response text input');

  return (
    <Box>
      <TextInput
        label={label}
        rows={rows}
        maxLength={maxLength}
        value={value}
        onChange={setValue}
        onMaxLength={action('onMaxLength')}
      />
    </Box>
  );
});
