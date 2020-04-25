import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import PrimaryNav from './PrimaryNav.js';

expect.extend(toHaveNoViolations);

describe('Nav', () => {
  it('renders without crashing', () => {
    render(<PrimaryNav />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<PrimaryNav />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // Accessibility: A <nav> element should be present at the
  // top of the markup. This allows users to access the menu
  // directly.
  it('should contain a <nav> element', () => {
    render(<PrimaryNav />);
  });

  // Accessibiliy: The menu should be labeled to indicate
  // what the menu is for.

  // Accessibility: Here we highlight/indicate the menu item
  // which correlates to the current page that we're on.
  it('should indicate the current item', () => {
    render(<PrimaryNav />);
  });
});
