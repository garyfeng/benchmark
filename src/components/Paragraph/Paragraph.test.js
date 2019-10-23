import React from 'react';
import { render } from '@testing-library/react';
import Paragraph from './Paragraph';

describe('Paragraph', () => {
  it('renders without crashing', () => {
    render(<Paragraph />);
  });
});
