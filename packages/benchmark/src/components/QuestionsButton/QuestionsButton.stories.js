import React from 'react';
import { useToggle } from '../../util/hooks';
import QuestionsButton from './QuestionsButton.js';

export default {
  title: 'SBT/QuestionsButton',
  component: QuestionsButton
};

export function Basic() {
  const [open, setOpen] = useToggle(false);
  return <QuestionsButton isOpen={open} onClick={setOpen} />;
}
