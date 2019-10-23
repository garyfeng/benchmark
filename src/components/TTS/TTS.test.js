import React from 'react';
import { render } from '@testing-library/react';
import TTS from './TTS';

describe('TTS', () => {
  it('renders without crashing', () => {
    render(<TTS />);
  });
});
