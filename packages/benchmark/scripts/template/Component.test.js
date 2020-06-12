import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Component from './Component';

expect.extend(toHaveNoViolations);

function Example() {
  return <Component>Hello World</Component>;
}

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Example />);
  });
});

describe('Component A11y', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
