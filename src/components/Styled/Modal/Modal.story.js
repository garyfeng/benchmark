import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Global from '../Global';
import Button from '../Button';
import ThemeProvider from '../ThemeProvider';
import Modal from './Modal.js';

storiesOf('Modal', module).add('Modal', () => {
  const [open, setOpen] = useState(false);

  return (
    <Global>
      <ThemeProvider>
        <Modal isOpen={open} onClickBg={() => setOpen(false)}>
          Click outside to close
        </Modal>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
      </ThemeProvider>
    </Global>
  );
});
