import React, { useState } from 'react';
import { Box, Flex } from '../Base';
import { Tabs, Tab, TabsList } from './Tabs.js';

export default {
  title: 'Elements/Tabs',
  component: Tabs
};

export function Basic() {
  let [selectedTab, setSelectedTab] = useState(0);

  return (
    <Flex flexDirection="column" width="100%">
      <Box>
        <Tabs activeTab={selectedTab} onChange={setSelectedTab}>
          <TabsList>
            <Tab>1</Tab>
            <Tab>2</Tab>
            <Tab>3</Tab>
            <Tab>4</Tab>
            <Tab>5</Tab>
            <Tab>Review</Tab>
          </TabsList>
        </Tabs>
      </Box>
    </Flex>
  );
}
