import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Column from './Column';

expect.extend(toHaveNoViolations);

function Example() {
  return <Column>Hello World</Column>;
}

describe('Column', () => {
  it('renders without crashing', () => {
    render(<Example />);
  });
});

describe('Column A11y', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
