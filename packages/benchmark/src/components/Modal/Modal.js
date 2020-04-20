import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '../Base';
// import Button from '../Button';

function Modal({ isOpen = false, onClickBg, children, ...props }) {
  return (
    <Box
      alignItems="center"
      justifyContent="center"
      onClick={onClickBg}
      sx={{
        position: 'fixed',
        top: 0,
        display: isOpen ? 'flex' : 'none',
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)'
      }}
      {...props}
    >
      <Flex
        role="dialog"
        bg="white"
        minWidth="450px"
        maxWidth="90%"
        borderRadius="md"
        p="3"
        minHeight="300px"
      >
        {children}
      </Flex>
    </Box>
  );
}

Modal.propTypes = {
  open: PropTypes.bool
};

export default Modal;
