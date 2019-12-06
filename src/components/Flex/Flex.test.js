import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Flex from './Flex';

expect.extend(toHaveNoViolations);

describe('Flex', () => {
  it('renders without crashing', () => {
    render(<Flex />);
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Flex>Test</Flex>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
