import * as React from 'react';
import { render, waitFor } from 'tests/test-utils';
import Main from 'components/Main';

describe(`Main tests`, () => {
  // Render Header for testing
  const getMainEl = (props?: any) => render(<Main {...props} />);

  // Social links we should have in app
  const socials = ['github', 'linkedin', 'twitter', 'instagram'];

  it(`should render link for each social value`, () => {
    const { getByTestId } = getMainEl();

    socials.forEach((social) => {
      expect(getByTestId(social)).toBeInTheDocument();
    });
  });

  it(`should render feature-text without animation first`, () => {
    const { getByTestId } = getMainEl();

    expect(getByTestId('feature-text')).toBeInTheDocument();
  });

  it(`should render feature-text WITH animation after first render`, async () => {
    const { getByTestId } = getMainEl();

    await waitFor(
      () => {
        expect(getByTestId('feature-text-animate')).toBeInTheDocument();
      },
      { timeout: 5500 }
    );
  }, 6000);
});
