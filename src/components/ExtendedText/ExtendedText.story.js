import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ExtendedText from './ExtendedText';

storiesOf('Elements', module).add('Extended Text', () => {
  const maxLength = number('Maximum Length', 3000);
  const rows = number('Rows', 5);
  const label = text('Label', 'Item response text input');

  return (
    <ExtendedText
      label={label}
      rows={rows}
      maxLength={maxLength}
      onMaxLength={action('onMaxLength')}
    />
  );
});
