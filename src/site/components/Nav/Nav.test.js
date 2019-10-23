import React from 'react';
import { render } from '@testing-library/react';
import PrimaryNav from './PrimaryNav.js';

describe('Nav', () => {
  it('renders without crashing', () => {
    render(<PrimaryNav />);
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
