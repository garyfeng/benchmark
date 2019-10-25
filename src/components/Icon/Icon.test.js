import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import Icon from './Icon';

expect.extend(toHaveNoViolations);

describe('Icon', () => {
  it('renders without crashing', () => {
    render(<Icon />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Icon />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
