import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

expect.extend(toHaveNoViolations);

describe('Paragraph', () => {
  it('renders without crashing', () => {
    render(<Paragraph />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Paragraph>Submit</Paragraph>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
