import React, { Children } from 'react';
import { Flex, Box } from './Base';

const Stack = ({
  direction = 'column',
  children,
  align,
  justify,
  spacing = 2,
  ...rest
}) => {
  return (
    <Flex
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      {...rest}
    >
      {Children.toArray(children).map((child, index) => {
        let isLastChild = (children.length || 1) === index + 1;
        let spacingProps =
          direction === 'row'
            ? { mr: isLastChild ? null : spacing }
            : { mb: isLastChild ? null : spacing };
        return <Box {...spacingProps}>{child}</Box>;
      })}
    </Flex>
  );
};

export default Stack;
