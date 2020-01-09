import React from 'react';
import { storiesOf } from '@storybook/react';
import { radios, select, boolean, text } from '@storybook/addon-knobs';

import { Box } from '../Styled/Base';
import Stack from '../Styled/Stack';
import Icon from '../Icon';
import Text from '../Text';
import Button from './Button';

storiesOf('Classic', module).add('Button: Examples', () => {
  return (
    <Stack spacing="4" p="4">
      <Box>
        <Button>Bare</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
      </Box>

      <Box>
        <Button small>Bare</Button>
        <Button small color="primary">
          Primary
        </Button>
        <Button small color="secondary">
          Secondary
        </Button>
        <Button small disabled>
          Disabled
        </Button>
      </Box>

      <Box>
        <Button type="rounded">Bare</Button>
        <Button type="rounded" color="primary">
          Primary
        </Button>
        <Button type="rounded" color="secondary">
          Secondary
        </Button>
      </Box>

      <Box>
        <Button type="circle" color="primary">
          <Icon iconName="pause" />
        </Button>

        <Button small type="circle" color="primary">
          <Icon iconName="pause" />
        </Button>

        <Button type="circle" color="secondary">
          <Icon iconName="chevron-up-thin" />
        </Button>

        <Button type="circle" color="secondary">
          <Icon iconName="arrow-left" />
        </Button>

        <Button type="rounded" color="primary">
          <Text strong>Next</Text>
          <Icon iconName="arrow-right" />
        </Button>

        <Button small color="secondary">
          <Icon iconName="cross-thin" color="muted" />
          <Text>Delete</Text>
        </Button>

        <Button small toggled color="secondary">
          <Icon iconName="cross-thin" color="danger" />
          <Text>Delete</Text>
        </Button>

        <Button small>
          <Icon icon="help" size="huge" />
        </Button>

        <Button small type="circle" color="secondary">
          <Icon iconName="asterisk" size="small" />
        </Button>

        <Button small type="square">
          <Icon iconName="play" />
        </Button>

        <Button small type="square">
          <Icon iconName="pause" />
        </Button>
      </Box>
      <Box>
        <Button color="primary">Review my answer</Button>
        <Button color="primary">Submit</Button>
        <Button color="secondary">Clear</Button>
      </Box>
    </Stack>
  );
});

storiesOf('Classic', module).add('Button: Sandbox', () => {
  const txt = text('Text', 'Button');
  const small = boolean('Small', false);
  const disabled = boolean('Disabled', false);
  const toggled = boolean('Toggled', false);
  const colors = {
    Bare: '',
    Primary: 'primary',
    Secondary: 'secondary'
  };
  const color = radios('Color', colors, 'primary');
  const types = {
    Default: '',
    Rounded: 'rounded',
    Square: 'square',
    Circle: 'circle'
  };
  const type = radios('Type', types, '');
  const iconPos = radios('Icon Position', ['None', 'Left', 'Right'], '');
  const icon = select('Icon', ['', ...Icon.types], 'plus');
  return (
    <Box>
      <div>
        <Button
          toggled={toggled}
          color={color}
          type={type}
          small={small}
          disabled={disabled}
        >
          {iconPos === 'Left' ? <Icon iconName={icon} /> : null}
          {txt ? <Text>{txt}</Text> : null}
          {iconPos === 'Right' ? <Icon iconName={icon} /> : null}
        </Button>
      </div>
    </Box>
  );
});
