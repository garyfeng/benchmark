import React, { Children, cloneElement } from 'react';
import { Box, Flex, Text } from '../Base';

const states = {
  normal: {
    ':focus': {
      outline: '1px dotted',
      outlineColor: 'black',
      outlineOffset: '-5px'
    },
    ':hover': {
      cursor: 'pointer',
      bg: 'white'
    },
    ':last-of-type': {
      borderTopRightRadius: 'lg',
      borderColor: 'n.600'
    },
    ':first-of-type': {
      borderTopLeftRadius: 'lg',
      borderColor: 'n.600'
    }
  },
  active: {
    borderTopLeftRadius: 'lg',
    borderTopRightRadius: 'lg',
    borderBottom: 0,
    bg: 'white',
    mt: 2,
    pt: 2,
    borderColor: 'n.600',
    zIndex: '2',
    ':focus': {
      outline: '1px dotted',
      outlineColor: 'black',
      outlineOffset: '-5px'
    }
  }
};

export function TabsList({ activeTab, children, onChange }) {
  return (
    <Flex
      sx={{
        display: 'table'
      }}
    >
      {Children.map(children, (tab, index) => {
        const active = index === activeTab;
        return cloneElement(tab, { index, onClick: onChange, active });
      })}
    </Flex>
  );
}

export function Tab({ children, active, index, onClick }) {
  const style = active ? states.active : states.normal;

  return (
    <Box
      as="button"
      onClick={() => onClick(index)}
      border="1"
      mt="3"
      borderColor="n.600"
      px="3"
      py="2"
      bg="n.50"
      ml="-1px"
      sx={style}
    >
      <Text fontSize="3">{children}</Text>
    </Box>
  );
}

export function Tabs({
  activeTab,
  children,
  onChange,
  justifyContent = 'flex-end'
}) {
  let List = cloneElement(children, { activeTab, onChange });
  return (
    <Flex bg="blue.100" justifyContent={justifyContent} px="2">
      {List}
    </Flex>
  );
}

export default { Tabs, Tab, TabsList };
