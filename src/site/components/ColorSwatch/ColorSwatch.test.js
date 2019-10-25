import React from 'react';
import { render } from '@testing-library/react';
import ColorSwatch from './ColorSwatch.js';

describe('ColorSwatch', () => {
  it('renders without crashing', () => {
    render(<ColorSwatch />);
  });
});
