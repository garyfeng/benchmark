import React from 'react';
import { Children, cloneElement } from 'react';
import { Flex } from './Box';

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
        let isLastChild = children.length === index + 1;
        let spacingProps =
          direction === 'row'
            ? { mr: isLastChild ? null : spacing }
            : { mb: isLastChild ? null : spacing };
        return cloneElement(child, spacingProps);
      })}
    </Flex>
  );
};

export default Stack;
