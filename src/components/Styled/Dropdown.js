import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Flex, Box } from './Base';

function Option({ children, selected = false, onClick }) {
  return (
    <Box
      p="2"
      onClick={onClick}
      bg={selected ? 'blue.100' : null}
      pr="34px"
      sx={{
        cursor: 'pointer',
        ':hover': {
          bg: 'p.500',
          color: 'white'
        }
      }}
    >
      {children}
    </Box>
  );
}

function DropdownMenu({ options, selected, isOpen, onSelect }) {
  return (
    <Box
      ml="2px"
      border={isOpen ? '1' : 'none'}
      sx={{
        position: 'absolute',
        overflow: 'hidden'
      }}
      style={{ maxHeight: isOpen ? '300px' : '0px' }}
    >
      <Option selected={selected === null} onClick={() => onSelect(null)}>
        &nbsp;
      </Option>
      {options.map(child => {
        let { value } = child.props;
        return (
          <Option
            key={value}
            selected={value === selected}
            onClick={() => onSelect(value)}
          >
            {child}
          </Option>
        );
      })}
    </Box>
  );
}

function Selected({ selected }) {
  return (
    <Box
      border="1"
      px="2"
      py="1"
      borderRadius="default"
      sx={{
        ':hover': {
          cursor: 'pointer',
          boxShadow: 'md'
        }
      }}
    >
      <Flex alignItems="flex-end">
        <Box>{selected}</Box>
        <Flex pl="2">
          <IoMdArrowDropdown />
        </Flex>
      </Flex>
    </Box>
  );
}

function Dropdown({ isOpen, children, onClick, onSelect, selected }) {
  const selectedEl = children.filter(child => {
    return child.props.value === selected;
  });

  return (
    <Box onClick={onClick}>
      <Selected selected={selectedEl} />
      <DropdownMenu
        options={children}
        selected={selected}
        isOpen={isOpen}
        onSelect={onSelect}
      />
    </Box>
  );
}

export default Dropdown;
