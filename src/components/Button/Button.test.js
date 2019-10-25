import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import Button from './Button';

expect.extend(toHaveNoViolations);

describe('Button', () => {
  it('renders without crashing', () => {
    render(<Button>Submit</Button>);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Button>Submit</Button>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
