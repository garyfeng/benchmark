import React from 'react';
import { render } from '@testing-library/react';
import Component from './Component';

describe('Component', () => {
  it('renders without crashing', () => {
    render(<Component />);
  });
});
