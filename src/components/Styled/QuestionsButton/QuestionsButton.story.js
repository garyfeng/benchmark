import React from 'react';
import { storiesOf } from '@storybook/react';
import { useToggle } from '../../../util/hooks';
import Global from '../Global';
import ThemeProvider from '../ThemeProvider';
import QuestionsButton from './QuestionsButton.js';

storiesOf('SBT', module).add('QuestionsButton', () => {
  const [open, setOpen] = useToggle(false);
  return (
    <Global>
      <ThemeProvider>
        <QuestionsButton isOpen={open} onClick={setOpen} />
      </ThemeProvider>
    </Global>
  );
});
