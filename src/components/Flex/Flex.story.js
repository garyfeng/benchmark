import React from 'react';
import { storiesOf } from '@storybook/react';
import { debug } from '../../styles/mixins.module.css';

import Flex from './Flex';

storiesOf('Flex', module).add('Website Layout', () => {
  return (
    <Flex className={debug} grow={1} fill>
      <Flex grow={1} justify="center">
        NAV
      </Flex>
      <Flex grow={4} direction="column">
        <Flex grow={1} justify="center" align="center">
          Header
        </Flex>
        <Flex grow={5}>
          <Flex grow={3}>Article Content</Flex>
          <Flex grow={1} justify="center">
            Aside
          </Flex>
        </Flex>
        <Flex grow={1} justify="center" align="center">
          Footer
        </Flex>
      </Flex>
    </Flex>
  );
});

storiesOf('Flex', module).add('One Column', () => {
  return (
    <Flex className={debug} grow={1} direction="column" fill>
      <Flex justify="center" p={2}>
        Toolbar
      </Flex>
      <Flex grow={4} justify="center" align="center">
        Content
      </Flex>
    </Flex>
  );
});

storiesOf('Flex', module).add('Two Column 50/50', () => {
  return (
    <Flex className={debug} grow={1} direction="column" fill>
      <Flex justify="center" p={2}>
        Toolbar
      </Flex>
      <Flex fill>
        <Flex grow={1} justify="center" align="center">
          Content A
        </Flex>
        <Flex grow={1} justify="center" align="center">
          Content B
        </Flex>
      </Flex>
    </Flex>
  );
});

storiesOf('Flex', module).add('Two Column 40/60', () => {
  return (
    <Flex className={debug} grow={1} direction="column" fill>
      <Flex justify="center" p={2}>
        Toolbar
      </Flex>
      <Flex fill>
        <Flex grow={4} justify="center" align="center">
          Content A
        </Flex>
        <Flex grow={6} justify="center" align="center">
          Content B
        </Flex>
      </Flex>
    </Flex>
  );
});
