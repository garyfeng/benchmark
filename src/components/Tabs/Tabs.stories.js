import React, { useState } from 'react';
import { Box, Flex } from '../Base';
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
    <Tabs>
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

export function TabAlignment() {
  let alignments = ['left', 'center', 'right'];

  return (
    <Stack flexDirection="column" width="400px">
      {alignments.map(alignment => {
        return (
          <Box
            width="100%"
            key={alignment}
            border="1"
            borderColor="n.100"
            p="3"
            bg="n.50"
          >
            <Box>{alignment}</Box>
            <Tabs align={alignment}>
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
        );
      })}
    </Stack>
  );
}
