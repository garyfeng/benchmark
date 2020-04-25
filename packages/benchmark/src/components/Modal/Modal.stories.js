import React, { useState } from 'react';
import Button from '../Button';
import Modal from './Modal.js';

export default {
  title: 'Elements/Modal',
  component: Modal
};

export function Basic() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Modal isOpen={open} onClickBg={() => setOpen(false)}>
        Click outside to close
      </Modal>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
    </>
  );
}
