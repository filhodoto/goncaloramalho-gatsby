import * as React from 'react';
import { render } from 'tests/test-utils';
import { fireEvent } from '@testing-library/react';
import Header from 'components/Header';
import { DefaultTheme } from 'styled-components/macro';

// Render Header for testing
const getHeaderEl = (props?: { theme: DefaultTheme }) =>
  render(<Header {...props} />);

describe(`Header tests`, () => {
  it(`renders theme switch`, () => {
    const { getByTestId } = getHeaderEl();
    expect(getByTestId('switch')).toBeInTheDocument();
  });

  it('Render dark mode as default', () => {
    const { getByTestId } = getHeaderEl();

    // Check if swicth label has dark mode text
    expect(getByTestId('switch-label').textContent).toBe('too dark?');
  });

  it('Should change theme when switch is clicked', () => {
    const { getByTestId } = getHeaderEl();
    const switchEl = getByTestId('switch');
    const switchLabel = getByTestId('switch-label');

    // Confirm we are in dark mode by default
    expect(switchLabel.textContent).toBe('too dark?');

    // Trigger Switch click event
    fireEvent.click(switchEl);

    // Check if tesy changed to light more
    expect(switchLabel.textContent).toBe('too light?');
  });
});
