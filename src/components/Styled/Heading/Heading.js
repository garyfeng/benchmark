import React from 'react';
import styled from '@emotion/styled';
import { Box } from '../Base';

export const HeadingBase = styled(Box)`
  display: block;
`;

function Heading({ children, level = 1 }) {
  const H = 'h' + level;
  const size = 8 - level;

  return (
    <HeadingBase as={H} fontSize={size}>
      {children}
    </HeadingBase>
  );
}

export default Heading;
