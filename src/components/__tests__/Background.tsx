import Background, { BackgroundProps } from 'components/Background';
import * as React from 'react';
import { render } from 'tests/test-utils';

describe('Background tests', () => {
  const getBackgroundEl = (props: BackgroundProps) =>
    render(<Background {...props} />);

  it('should render a feature element if its number IS a multiple of 3', () => {
    const { getAllByTestId } = getBackgroundEl({ numberOfElements: 4 });
    expect(getAllByTestId('bg-element-feature').length).toBe(1);
  });

  it('should render a blob element if its number is NOT multiple of 3', () => {
    const { getAllByTestId } = getBackgroundEl({ numberOfElements: 21 });
    expect(getAllByTestId('bg-element').length).toBe(14);
  });

  it('should start with web feature bg element', () => {
    const { getAllByTestId } = getBackgroundEl({ numberOfElements: 4 });
    expect(getAllByTestId('web')).not.toBe(null);
  });
});
