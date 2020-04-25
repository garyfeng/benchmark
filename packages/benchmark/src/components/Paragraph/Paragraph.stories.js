import React from 'react';
import Paragraph from './Paragraph.js';

export default {
  title: 'Typography/Paragraph',
  component: Text
};

export function Basic() {
  return (
    <>
      <Paragraph>
        This is a sample paragraph. The main difference between this and the
        text component is that it will display as a block whereas the Text
        component will display inline.
      </Paragraph>
      <Paragraph>Here is a second paragraph.</Paragraph>
    </>
  );
}
