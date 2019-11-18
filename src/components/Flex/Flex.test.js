import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Box from './Box';

expect.extend(toHaveNoViolations);

describe('Box', () => {
  it('renders without crashing', () => {
    render(<Box />);
  });
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Box>Test</Box>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
