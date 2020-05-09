import React, {
  useReducer,
  useRef,
  createContext,
  forwardRef,
  useContext,
  Children,
  cloneElement
} from 'react';
import { useId } from '@reach/auto-id';
import { Box, Flex, Text } from '../Base';
import { reducer, initialState } from './Tabs.reducer.js';
import styles from './Tabs.style.js';

// We create a context to enable communication between the
// parent <Tabs> it's <Tab> and <TabPanel> children.
const TabsContext = createContext();

////////////////////////////////////////////////////////////////////////////////

export function Tabs({
  activeTab = 0,
  align = 'center',
  children,
  label,
  onChange,
  ...props
}) {
  // Local state and event handler fallbacks
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleChange = tabIndex => dispatch({ type: 'SELECT_TAB', tabIndex });
  activeTab = activeTab || state.activeTab;
  onChange = onChange || handleChange;

  // Create a ref that will be applied to the active panel.
  // This will allous us to set focus on it when the down
  // arrow key is pressed.
  const activePanelRef = useRef();
  function onFocusPanel() {
    activePanelRef.current.focus();
  }

  // Create a unique ID for this component instance. This
  // will be used for accessibility where we link to Tabs
  // with their TabPanel counterpart. This ID is not
  // applied to the root element as it is not needed.
  const tabsId = `tabs-${useId()}`;

  return (
    <TabsContext.Provider
      value={{
        activeTab,
        align,
        label,
        onChange,
        onFocusPanel,
        activePanelRef,
        tabsId
      }}
    >
      <Flex flexDirection="column" {...props}>
        {children}
      </Flex>
    </TabsContext.Provider>
  );
}

////////////////////////////////////////////////////////////////////////////////

export function TabList({ children, ...props }) {
  const {
    align,
    tabsId,
    activeTab,
    label,
    onChange,
    onFocusPanel
  } = useContext(TabsContext);

  const alignments = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end'
  };

  const alignment = alignments[align] || 'flex-start';
  const childEls = useRef([]);
  const numTabs = children.length;

  const focusableIndexes = children
    .map((child, index) => (child.props.isDisabled === true ? null : index))
    .filter(index => index != null);

  const enabledSelectedIndex = focusableIndexes.indexOf(activeTab);

  function changeTabFocus(tabIndex) {
    const childIndex = focusableIndexes[tabIndex];
    childEls.current[childIndex].focus();
    onChange(childIndex);
  }

  function onKeyDown(event) {
    if (event.key === 'ArrowRight') {
      if (activeTab + 1 < numTabs) {
        const nextIndex = (enabledSelectedIndex + 1) % numTabs;
        changeTabFocus(nextIndex);
      }
    }

    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      if (activeTab !== 0) {
        const nextIndex = (enabledSelectedIndex - 1 + numTabs) % numTabs;
        changeTabFocus(nextIndex);
      }
    }

    if (event.key === 'ArrowDown') {
      onFocusPanel();
    }

    if (event.key === 'Home') {
      changeTabFocus(0);
    }

    if (event.key === 'End') {
      changeTabFocus(numTabs - 1);
    }
  }

  return (
    <Flex
      justifyContent={alignment}
      borderBottom="1"
      borderColor="n.400"
      {...props}
    >
      <Flex role="tablist" aria-label={label}>
        {Children.map(children, (tab, index) => {
          const isActive = index === activeTab;
          const id = `${tabsId}-tab-${index}`;
          const ref = node => (childEls.current[index] = node);
          return cloneElement(tab, {
            key: id,
            ref,
            index,
            id,
            onKeyDown,
            isActive
          });
        })}
      </Flex>
    </Flex>
  );
}

////////////////////////////////////////////////////////////////////////////////

export const Tab = forwardRef((props, ref) => {
  const {
    children,
    id,
    index,
    isActive,
    isDisabled,
    onKeyDown,
    ...rest
  } = props;

  const { onChange, tabsId } = useContext(TabsContext);

  return (
    <Box
      as="button"
      role="tab"
      id={id}
      ref={ref}
      disabled={isDisabled}
      // a11y
      aria-selected={isActive ? true : false}
      aria-controls={`${tabsId}-panel-${index}`}
      aria-disabled={isDisabled}
      tabIndex={isActive ? 0 : -1}
      // events
      onClick={() => onChange(index)}
      onKeyDown={onKeyDown}
      // other
      sx={styles.tab}
      {...rest}
    >
      <Text fontSize="3">{children}</Text>
    </Box>
  );
});

////////////////////////////////////////////////////////////////////////////////

export function TabPanels({ children, ...props }) {
  const { activeTab, tabsId } = useContext(TabsContext);

  let activePanel;
  React.Children.toArray(children).forEach((child, index) => {
    if (index === activeTab) {
      activePanel = cloneElement(child, {
        isActive: activeTab === index,
        id: `${tabsId}-panel-${index}`,
        labelBy: `${tabsId}-tab-${index}`
      });
    }
  });

  return (
    <Box width="100%" {...props}>
      {activePanel ? activePanel : <Box>No tab content found</Box>}
    </Box>
  );
}

////////////////////////////////////////////////////////////////////////////////

export function TabPanel({
  id,
  labelBy,
  children,
  p = 3,
  isActive = false,
  ...props
}) {
  const { activePanelRef } = useContext(TabsContext);

  return (
    // We pass on all the props so that styling props can be
    // applied to the TabPanel.
    // <TabPanel p="4" bg="blue.100">...
    <Box
      id={id}
      role="tabpanel"
      aria-labelledby={labelBy}
      tabIndex={isActive ? 0 : null}
      ref={activePanelRef}
      p={p}
      {...props}
    >
      {children}
    </Box>
  );
}

////////////////////////////////////////////////////////////////////////////////

export default { Tabs, Tab, TabList, TabPanels, TabPanel };
