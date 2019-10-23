import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios, boolean, text } from '@storybook/addon-knobs';

import Text from './Text';
import Box from '../private/Box';

storiesOf('Typography', module).add('Text', () => {
  const txt = text('Text', 'Sandbox Text');
  const type = radios('Type', ['muted', 'success', 'warning', 'danger'], '');
  const underline = boolean('Underline', false);
  const strong = boolean('Strong', false);
  const italic = boolean('Italic', false);

  return (
    <div>
      <Box>
        <Text>Normal Text</Text>
      </Box>
      <Box>
        <Text type="muted">Muted Text</Text>
      </Box>
      <Box>
        <Text type="success">Success Text</Text>
      </Box>
      <Box>
        <Text type="warning">Warning Text</Text>
      </Box>
      <Box>
        <Text type="danger">Danger Text</Text>
      </Box>
      <Box>
        <Text strong>Strong Text</Text>
      </Box>
      <Box>
        <Text underline>Underline Text</Text>
      </Box>
      <Box>
        <Text italic>Italic Text</Text>
      </Box>
      <Box>
        <Text italic={italic} underline={underline} strong={strong} type={type}>
          {txt}
        </Text>
      </Box>
    </div>
  );
});
