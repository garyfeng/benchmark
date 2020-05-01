import React from 'react';
import { select, boolean, text } from '@storybook/addon-knobs';

import { Text } from '../Base';
import TTS from './TTS';

export default {
  title: 'Lab/TTS',
  component: TTS
};

export function Basic() {
  const txt = text('Text', `Hello World`);
  const active = boolean('Active', true);

  let voices = {
    default: null
  };
  window.speechSynthesis.getVoices().forEach(v => {
    voices[`${v.voiceURI} (${v.lang})`] = v.voiceURI;
  });
  const voice = select('Voice', voices);
  return (
    <TTS active={active} voice={voice}>
      <Text>{txt}</Text>
    </TTS>
  );
}
