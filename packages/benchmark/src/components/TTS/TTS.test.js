import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import TTS from './TTS';

expect.extend(toHaveNoViolations);

describe('TTS', () => {
  it('renders without crashing', () => {
    render(<TTS />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<TTS>Submit</TTS>);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
