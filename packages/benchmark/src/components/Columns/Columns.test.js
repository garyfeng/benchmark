import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Columns from './Columns';

expect.extend(toHaveNoViolations);

function Example() {
  return <Columns>Hello World</Columns>;
}

describe('Columns', () => {
  it('renders without crashing', () => {
    render(<Example />);
  });
});

describe('Columns A11y', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
