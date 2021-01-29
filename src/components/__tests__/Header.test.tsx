import * as React from 'react';
import { render } from 'tests/test-utils';

import Header from 'components/Header';
import { darkTheme } from 'theme/theme';

describe(`Header tests`, () => {
  it(`renders theme switch`, () => {
    const { getByTestId } = render(<Header />);

    const swicth = getByTestId('switch');
    expect(swicth).toBeInTheDocument();
  });
});
