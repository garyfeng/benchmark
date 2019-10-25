import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Heading from './Heading';

expect.extend(toHaveNoViolations);

describe('Heading', () => {
  it('renders without crashing', () => {
    render(<Heading />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Heading>Test</Heading>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
