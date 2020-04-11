import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../Button';
import Modal from './Modal.js';

storiesOf('Modal', module).add('Modal', () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal isOpen={open} onClickBg={() => setOpen(false)}>
        Click outside to close
      </Modal>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
    </>
  );
});
