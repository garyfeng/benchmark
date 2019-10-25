import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Tag from './Tag';

expect.extend(toHaveNoViolations);

describe('Tag', () => {
  it('renders without crashing', () => {
    render(<Tag />);
  });

  it('should not have basic accessibility issues', async () => {
    let types = ['success', 'warning', 'danger'];

    for (const type of types) {
      const { container } = render(<Tag type={type}>Example</Tag>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    }
  });
});
