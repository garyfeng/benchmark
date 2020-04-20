import React from 'react';
import { storiesOf } from '@storybook/react';
import ColorSwatch from './ColorSwatch.js';

storiesOf('Docs', module).add('ColorSwatch', () => {
  return (
    <div>
      <ColorSwatch name="Primary" color="--color-primary" />
      <ColorSwatch name="Secondary" color="--color-secondary" />
      <ColorSwatch name="Neutral 0" color="--color-neutral-0" />
      <ColorSwatch name="Neutral 1" color="--color-neutral-1" />
      <ColorSwatch name="Neutral 0" color="--color-neutral-0" />
      <ColorSwatch name="Neutral 1" color="--color-neutral-1" />
      <ColorSwatch name="Neutral 2" color="--color-neutral-2" />
      <ColorSwatch name="Neutral 3" color="--color-neutral-3" />
      <ColorSwatch name="Neutral 7" color="--color-neutral-7" />
      <ColorSwatch name="Neutral 8" color="--color-neutral-8" />
      <ColorSwatch name="Neutral 9" color="--color-neutral-9" />
      <ColorSwatch name="Neutral 10" color="--color-neutral-10" border />
      <ColorSwatch name="Info" color="--color-info" />
      <ColorSwatch name="Success" color="--color-success" />
      <ColorSwatch name="Warning" color="--color-warning" />
      <ColorSwatch name="Danger" color="--color-danger" />
    </div>
  );
});
