import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '../Base';

function TTS({ children, voice = 'native', active = false }) {
  function speak(event) {
    if (!active) {
      return;
    }
    const text = event.currentTarget.textContent;
    const msg = new SpeechSynthesisUtterance(text);
    msg.voice = speechSynthesis.getVoices().filter(v => {
      return v.name === voice;
    })[0];
    window.speechSynthesis.speak(msg);
  }

  return (
    <Box
      as="button"
      onClick={speak}
      border={active ? 2 : null}
      sx={{ cursor: active ? 'pointer' : null }}
    >
      {children}
    </Box>
  );
}

TTS.propTypes = {
  active: PropTypes.bool,
  voice: PropTypes.string
};

export default TTS;
