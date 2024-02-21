// eslint-disable-next-line @typescript-eslint/no-var-requires
const React = require('react');
const gatsby = jest.requireActual('gatsby');
module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  Link: jest.fn().mockImplementation(
    // these props are invalid for an `a` tag
    ({
      activeClassName,
      activeStyle,
      getProps,
      innerRef,
      partiallyActive,
      ref,
      replace,
      to,
      ...rest
    }) =>
      React.createElement('a', {
        ...rest,
        href: to,
      })
  ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn().mockReturnValue({
    site: {
      siteMetadata: {
        email: 'mock@email.com',
        social: {
          linkedin: 'mock-linkedin',
          github: 'mock-github',
          twitter: 'mock-twitter',
          instagram: 'mock-instagram',
        },
      },
    },
  }),
};
