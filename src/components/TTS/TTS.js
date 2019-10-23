import React from 'react';
import css from './TTS.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TTS({ children, voice = 'native', enabled = false }) {
  const classes = classnames({ [css.enabled]: enabled });

  function speak(event) {
    if (!enabled) {
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
    <span className={classes} onClick={speak}>
      {children}
    </span>
  );
}

TTS.propTypes = {
  enabled: PropTypes.bool,
  voice: PropTypes.string
};

export default TTS;
