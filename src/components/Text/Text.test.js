import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Text from './Text';

expect.extend(toHaveNoViolations);

describe('Text', () => {
  it('renders without crashing', () => {
    render(<Text />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Text>Submit</Text>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
