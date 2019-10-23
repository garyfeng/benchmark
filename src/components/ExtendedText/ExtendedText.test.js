import React from 'react';
import { render } from '@testing-library/react';
import ExtendedText from './ExtendedText';

describe('ExtendedText', () => {
  it('renders without crashing', () => {
    render(<ExtendedText />);
  });
});
