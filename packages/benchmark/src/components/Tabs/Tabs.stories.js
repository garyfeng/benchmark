import React, { useState } from 'react';
import { Box, Text } from '../Base';
import Stack from '../Stack';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from './Tabs.js';

export default {
  title: 'Elements/Tabs',
  component: Tabs
};

export function Basic() {
  let [selectedTab, setSelectedTab] = useState(0);

  return (
    <Tabs
      selectedTab={selectedTab}
      setSelectedTab={tabIndex => setSelectedTab(tabIndex)}
      label="questions"
    >
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
        <Tab>Review</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>One Content</TabPanel>
        <TabPanel>Two Content</TabPanel>
        <TabPanel>Three Content</TabPanel>
        <TabPanel>Review Content</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export function LocalState() {
  return (
    <Tabs label="questions">
      <TabList>
        <Tab>1</Tab>
        <Tab>2</Tab>
        <Tab>3</Tab>
        <Tab>Review</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>One Content</TabPanel>
        <TabPanel>Two Content</TabPanel>
        <TabPanel>Three Content</TabPanel>
        <TabPanel>Review Content</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export function DisabledTab() {
  return (
    <Tabs label="questions">
      <TabList>
        <Tab>1</Tab>
        <Tab isDisabled>2</Tab>
        <Tab>3</Tab>
        <Tab>Review</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>One Content</TabPanel>
        <TabPanel>Two Content</TabPanel>
        <TabPanel>Three Content</TabPanel>
        <TabPanel>Review Content</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export function TabAlignment() {
  let alignments = ['left', 'center', 'right'];

  return (
    <Stack flexDirection="column" width="400px">
      {alignments.map(alignment => {
        return (
          <>
            <Text p="1" fontSize="1">
              {alignment}
            </Text>
            <Box
              p="3"
              width="100%"
              key={alignment}
              border="1"
              borderColor="n.100"
            >
              <Tabs label="questions" align={alignment}>
                <TabList>
                  <Tab>1</Tab>
                  <Tab>2</Tab>
                  <Tab>3</Tab>
                  <Tab>Review</Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>One Content</TabPanel>
                  <TabPanel>Two Content</TabPanel>
                  <TabPanel>Three Content</TabPanel>
                  <TabPanel>Review Content</TabPanel>>
                </TabPanels>
              </Tabs>
            </Box>
          </>
        );
      })}
    </Stack>
  );
}
