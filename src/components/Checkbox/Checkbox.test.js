import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import Checkbox from './Checkbox';

expect.extend(toHaveNoViolations);

function handleChange() {
  console.log('change');
}

describe('Checkbox', () => {
  it('renders without crashing', () => {
    render(<Checkbox onChange={handleChange} />);
  });

  xit('should not have basic accessibility issues', async () => {
    const { container } = render(<Checkbox onChange={handleChange} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  xit('should have a label element wrapping the input', () => {
    throw new Error();
  });

  it('should show a radio-selected icon when checked', () => {
    const { container } = render(<Checkbox checked onChange={handleChange} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should show a radio-selected icon when checked', () => {
    const { container } = render(<Checkbox checked onChange={handleChange} />);
    const selected = container.querySelector('.checkbox-selected');
    expect(selected).toBeTruthy();
  });

  it('should show a radio-unselected icon when not checked', () => {
    const { container } = render(<Checkbox onChange={handleChange} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  xit('should change the icon opacity when disabled', () => {
    throw new Error();
  });

  xit('should not change the text opacity when disabled', () => {
    throw new Error();
  });

  xit('should not change the text opacity when disabled', () => {
    throw new Error();
  });

  xit('should show a focus ring when focused', () => {
    throw new Error();
  });

  xit('should not show a focus ring when unfocused', () => {
    throw new Error();
  });

  xit('should invoke the change handler', () => {
    throw new Error();
  });

  xit('should invoke the focus handler', () => {
    throw new Error();
  });

  xit('should invoke the blur handler', () => {
    throw new Error();
  });
});
