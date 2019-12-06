import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, boolean, text } from '@storybook/addon-knobs';

import Text from '../Text';
import TTS from './TTS';

storiesOf('Elements', module).add('TTS', () => {
  const txt = text('Text', `Hello AJ`);
  const enabled = boolean('Enabled', true);

  let voices = {
    default: null
  };
  window.speechSynthesis.getVoices().forEach(v => {
    voices[`${v.voiceURI} (${v.lang})`] = v.voiceURI;
  });
  const voice = select('Voice', voices);
  return (
    <TTS enabled={enabled} voice={voice}>
      <Text>{txt}</Text>
    </TTS>
  );
});
