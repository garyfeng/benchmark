import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '../../util/hooks';
import QuestionsButton from './QuestionsButton.js';

storiesOf('SBT', module).add('QuestionsButton', () => {
  const [open, setOpen] = useToggle(false);
  return <QuestionsButton isOpen={open} onClick={setOpen} />;
});
