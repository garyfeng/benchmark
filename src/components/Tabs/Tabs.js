import React, {
  useReducer,
  createContext,
  useContext,
  Children,
  cloneElement
} from 'react';
import { Box, Flex, Text } from '../Base';
import { reducer, initialState } from './Tabs.reducer.js';

// The following tabs component API is heavily inspired by
// the reach-ui and chakra-ui implementations.
// https://reacttraining.com/reach-ui/tabs
// https://chakra-ui.com/tabs

// We create a Tabs context to enable communication between the
// parent <Tabs> it's <Tab> and <TabPanel> children.
const TabsContext = createContext({
  activeTab: 0,
  align: 'left',
  onChange: () => {}
});

export function Tabs({ activeTab = 0, children, onChange, align = 'center' }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = tabIndex => dispatch({ type: 'SELECT_TAB', tabIndex });
  activeTab = activeTab || state.activeTab;
  onChange = onChange || handleChange;

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        onChange,
        align
      }}
    >
      <Flex flexDirection="column">{children}</Flex>
    </TabsContext.Provider>
  );
}

export function TabList({ activeTab, children, onChange }) {
  const { align } = useContext(TabsContext);
  const alignments = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  const alignment = alignments[align] || 'flex-start';

  return (
    <Flex justifyContent={alignment} borderBottom="1">
      <Flex>
        {Children.map(children, (tab, index) => {
          const active = index === activeTab;
          return cloneElement(tab, { index, onClick: onChange, active });
        })}
      </Flex>
    </Flex>
  );
}

export function Tab({ children, index }) {
  const { onChange, activeTab } = useContext(TabsContext);
  const isActive = index === activeTab;
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
      mt: 0,
      pt: 2,
      mb: '-1px',
      borderColor: 'n.600',
      zIndex: '2',
      ':focus': {
        outline: '1px dotted',
        outlineColor: 'black',
        outlineOffset: '-5px'
      }
    }
  };

  const style = isActive ? states.active : states.normal;

  return (
    <Box
      as="button"
      onClick={() => onChange(index)}
      border="1"
      borderColor="n.600"
      borderBottom="0"
      mt="2"
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

export function TabPanels({ children }) {
  const { activeTab } = useContext(TabsContext);
  return (
    <Box width="100%">
      {React.Children.toArray(children).filter((tab, index) => {
        return index === activeTab;
      })}
    </Box>
  );
}

export function TabPanel({ children, p = 3, ...props }) {
  return (
    // We pass on all the props so that styling props can be
    // applied to the TabPanel.
    // <TabPanel p="4" bg="blue.100">...
    <Box p={p} {...props}>
      {children}
    </Box>
  );
}

export default { Tabs, Tab, TabList, TabPanels, TabPanel };
