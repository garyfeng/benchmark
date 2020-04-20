import React, {
  useReducer,
  createContext,
  useContext,
  Children,
  cloneElement
} from 'react';
import { Box, Flex, Text } from '../Base';
import { reducer, initialState } from './Tabs.reducer.js';
import { useId } from '@reach/auto-id';

// We create a context to enable communication between the
// parent <Tabs> it's <Tab> and <TabPanel> children.
const TabsContext = createContext({
  activeTab: 0,
  align: 'left',
  tabsId: null,
  label: null,
  onChange: () => {}
});

export function Tabs({ label, activeTab = 0, children, onChange, align = 'center' }) {
  // Local state and handler fallbacks
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = tabIndex => dispatch({ type: 'SELECT_TAB', tabIndex });
  activeTab = activeTab || state.activeTab;
  onChange = onChange || handleChange;

  // Create a unique ID for this component instance. This
  // will be used for accessibility where we link to Tabs
  // with their TabPanel counterpart.  This ID is not
  // applied to the root element as it is not needed.
  const tabsId = `tabs-${useId()}`;

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        align,
        label,
        onChange,
        tabsId,
      }}
    >
      <Flex flexDirection="column">{children}</Flex>
    </TabsContext.Provider>
  );
}

export function TabList({ children, onChange }) {
  const { align, tabsId, activeTab, label } = useContext(TabsContext);
  const alignments = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };
  const alignment = alignments[align] || 'flex-start';

  return (
    <Flex justifyContent={alignment} borderBottom="1">
      <Flex role="tablist" aria-label={label}>
        {Children.map(children, (tab, index) => {
          const isActive = index === activeTab;
          const id = `${tabsId}-tab-${index}`;
          return cloneElement(tab, { index, id, onClick: onChange, isActive });
        })}
      </Flex>
    </Flex>
  );
}

export function Tab({ children, index, id, isActive }) {
  const { onChange, tabsId } = useContext(TabsContext);
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
      role="tab"
      id={id}
      aria-selected={isActive ? true : false}
      aria-controls={`${tabsId}-panel-${index}`}
      tabIndex={isActive ? 0 : -1}
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
  const { activeTab, tabsId } = useContext(TabsContext);

  // Add accessibility labels to tab panels
  const panelsWithIds = React.Children.toArray(children).map((child, index) => {
    return cloneElement(child, {
      'id': `${tabsId}-panel-${index}`,
      'aria-labelledby': `${tabsId}-tab-${index}`,
    });
  });

  return (
    <Box width="100%">
      {React.Children.toArray(panelsWithIds).filter((tab, index) => {
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
    <Box role="tabpanel" p={p} {...props}>
      {children}
    </Box>
  );
}

export default { Tabs, Tab, TabList, TabPanels, TabPanel };
