import React from 'react';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, fireEvent } from '@testing-library/react';
import { Tabs, TabList, Tab, TabPanel, TabPanels } from './Tabs.js';

function Example() {
  return (
    <Tabs>
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>Panel 1</TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </TabPanels>
    </Tabs>
  );
}

expect.extend(toHaveNoViolations);

describe('Tabs', () => {
  it('renders without crashing', () => {
    render(<Example />);
  });
});

describe('Tabs A11y', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(<Example />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it('should have a tablist role', async () => {
    const { getByRole } = render(<Example />);
    expect(getByRole('tablist')).toBeTruthy();
  });

  it('should have a "tab" role applied to all tabs', async () => {
    const { getAllByRole } = render(<Example />);
    expect(getAllByRole('tab').length).toEqual(3);
  });

  it('should set the aria-selected attribute', async () => {
    const { getAllByRole, queryByText } = render(<Example />);
    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(queryByText('Panel 2')).toBeVisible();
    expect(tabs[1]).toHaveAttribute('aria-selected', 'true');
    expect(tabs[0]).toHaveAttribute('aria-selected', 'false');
  });

  it('should set tabindex to "0" selected tabs and "-1" unselected tabs', async () => {
    const { getAllByRole, queryByText } = render(<Example />);
    const tabs = getAllByRole('tab');
    fireEvent.click(tabs[1]);
    expect(queryByText('Panel 2')).toBeVisible();
    expect(tabs[0]).toHaveAttribute('tabindex', '-1');
    expect(tabs[1]).toHaveAttribute('tabindex', '0');
    expect(tabs[2]).toHaveAttribute('tabindex', '-1');
  });

  it('should have a tabpanel role', async () => {
    const { getByRole } = render(<Example />);
    expect(getByRole('tabpanel')).toBeTruthy();
  });

  it('should have a aria-labledby on the tab panels', async () => {
    const { queryAllByRole } = render(<Example />);
    const tabs = queryAllByRole('tab');
    fireEvent.click(tabs[1]);
    const panels = queryAllByRole('tabpanel');
    const panelLabel = panels[0].getAttribute('aria-labelledby');
    const tabId = tabs[1].getAttribute('id');
    expect(panelLabel).toEqual(tabId);
  });

  it('should go to the next tab when the RightArrow key is pressed', async () => {
    // stub
    // todo: test for skipping disabled tabs
  });

  it('should go to the previous tab when the LeftArrow or UpArrow key is pressed', async () => {
    // stub
    // todo: test for skipping disabled tabs
  });

  it('should go to the first tab when the Home key is pressed', async () => {
    // stub
  });

  it('should go to the last tab when the End key is pressed', async () => {
    // stub
  });
});
