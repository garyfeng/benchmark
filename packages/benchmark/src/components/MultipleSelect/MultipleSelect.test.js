import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/react';
import MultipleSelect from './MultipleSelect';

function handleChange() {
  console.log('change');
}

expect.extend(toHaveNoViolations);

describe('MultipleChoice', () => {
  it('renders without crashing', () => {
    render(<MultipleSelect onChange={handleChange} />);
  });

  it('should not have basic accessibility issues', async () => {
    const { container } = render(<MultipleSelect onChange={handleChange} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
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
