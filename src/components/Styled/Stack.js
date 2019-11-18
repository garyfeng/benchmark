import React from 'react';
import { Box, Flex } from './Box';

export default function Stack({
  spacing,
  align,
  justify,
  direction = 'column',
  children
}) {
  return (
    <Flex align={align} justify={justify} flexDirection={direction}>
      {children.map((child, index) => {
        let isLastChild = children.length === index + 1;
        let spacingProps = { mb: isLastChild ? null : spacing };
        return (
          <Box d="inline-block" {...spacingProps}>
            {child}
          </Box>
        );
      })}
    </Flex>
  );
}
