import React, { useRef, useState, useEffect } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

import { Flex, Box } from '../Base';

function Option({ children, selected = false, onClick }) {
  return (
    <Box
      px="3"
      py="2"
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

function Selected({ selected }) {
  return (
    <Flex
      border="1"
      px="2"
      py="1"
      borderRadius="default"
      width="100%"
      sx={{
        right: 0,
        left: 0,
        ':hover': {
          cursor: 'pointer',
          boxShadow: 'md'
        }
      }}
    >
      <Flex flex="1">
        <Box flex="1">{selected}</Box>
        <Flex pl="2" alignItems="center">
          <IoMdArrowDropdown />
        </Flex>
      </Flex>
    </Flex>
  );
}

function Dropdown({ isOpen, children, onClick, onSelect, selected }) {
  const selectedEl = children.filter(child => {
    return child.props.value === selected;
  });

  const [width, setWidth] = useState();
  const ref = useRef(null);

  useEffect(() => {
    const w = ref.current ? ref.current.offsetWidth : 0;
    setWidth(w);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return (
    <Box
      display="inline-block"
      sx={{
        width: width + 4,
        verticalAlign: 'middle',
        ':focus': {
          outline: '1px dotted',
          outlineColor: 'black',
          outlineOffset: 2
        }
      }}
    >
      <Box onClick={onClick}>
        <Selected selected={selectedEl} />
        <Box
          ml="2px"
          border={isOpen ? '1' : 'none'}
          bg="white"
          ref={ref}
          sx={{
            overflow: 'hidden',
            position: 'absolute'
          }}
          style={{ maxHeight: isOpen ? '300px' : '0px' }}
        >
          <Option selected={selected === null} onClick={() => onSelect(null)}>
            &nbsp;
          </Option>
          {children.map(child => {
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
      </Box>
    </Box>
  );
}

export default Dropdown;
