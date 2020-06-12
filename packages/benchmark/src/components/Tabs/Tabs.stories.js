import React, { useState } from 'react';
import { Box, Text } from '../Base';
import Stack from '../Stack';
import Button from '../Button';
import { Tabs, Tab, TabList, TabPanel, TabPanels } from './Tabs.js';
import Paragraph from '../Paragraph';

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
        <TabPanel>
          <Paragraph>
            Arrow keys to navigate tabs. Tab key to focus below.
          </Paragraph>
          <Stack>
            <Button variant="secondary">Example Button</Button>
          </Stack>
        </TabPanel>
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

export function TabActioned() {
  return (
    <Tabs label="questions">
      <TabList>
        <Tab isActioned>1</Tab>
        <Tab>2</Tab>
        <Tab isActioned>3</Tab>
        <Tab>Review</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Answered Item</TabPanel>
        <TabPanel>Unanswered Item</TabPanel>
        <TabPanel>Answered Item</TabPanel>
        <TabPanel>Review Content</TabPanel>
      </TabPanels>
    </Tabs>
  );
}
