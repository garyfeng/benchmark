import React from 'react';
import { storiesOf } from '@storybook/react';

import Status from './Status';

storiesOf('Docs', module).add('Status', () => {
  const style = {
    display: 'grid',
    gridRowGap: '10px'
  };

  return (
    <div style={style}>
      <Status status="Pending" />
      <Status status="In Progress" />
      <Status status="Complete" />
    </div>
  );
});
