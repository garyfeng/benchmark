import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import MultipleChoice from './MultipleChoice';
import { SingleSelect } from './examples';

function handleChange() {
  console.log('change');
}

expect.extend(toHaveNoViolations);

describe('MultipleChoice', () => {
  it('renders without crashing', () => {
    render(<MultipleChoice onChange={handleChange} />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<MultipleChoice onChange={handleChange} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  // SINGLE SELECTION
  it('should un-eliminate an option when it is selected', async () => {
    // eliminate first and second option
    // select first option
    // check if still eliminated
    const { getAllByText, getAllByTestId, getByText } = render(
      <SingleSelect />
    );
    const eliminateEls = getAllByText('Eliminate Option');
    const optionEls = getAllByTestId('option-element');
    fireEvent.click(eliminateEls[0]);
    fireEvent.click(eliminateEls[1]);
    fireEvent.click(getByText('Option A'));
    expect(optionEls[0]).not.toHaveAttribute('disabled');
  });

  xit('should show a radio when maxChoices is 1', () => {
    throw new Error();
  });

  xit('should be able to change the radio selection', () => {
    throw new Error();
  });

  xit('should not be able to select more than 1 radio', () => {
    throw new Error();
  });

  // MULTI SELECTION
  xit('should show a checkbox when maxChoices is more than 1', () => {
    throw new Error();
  });

  xit('should invoke the blur handler', () => {
    throw new Error();
  });
  xit('should invoke the blur handler', () => {
    throw new Error();
  });
});
