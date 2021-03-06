import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'helpers/generic';
import SvgIcon from 'components/ui/SvgIcon';

interface SocialLinksProps {
  link: string;
  platform: string;
}

const Link = styled.a.attrs(() => ({
  target: '_blank',
  rel: 'noreferrer',
}))`
  display: block;
  display: flex;
  place-items: center;
  font-size: ${pxToRem(14)};
  margin: 0 ${pxToRem(10)} 0;
  cursor: pointer;
`;

const Icon = styled(SvgIcon)`
  fill: ${(props) => props.theme.colors.link};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  &:hover {
    fill: ${(props) => props.theme.colors.action};
    transform: scale(1.2);
  }
`;

/* Note: Could declare props directly in function but it0s cleaner with interface
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
 */
const SocialLinks = ({ link, platform }: SocialLinksProps): JSX.Element => {
  return (
    <Link href={link} aria-label={platform} data-testid={platform}>
      <Icon platform={platform} />
    </Link>
  );
};

export default SocialLinks;
