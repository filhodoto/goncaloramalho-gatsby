import React from 'react';
import styled from 'styled-components';
import { pxToRem } from 'helpers/generic';
import SvgIcon from 'components/ui/SvgIcon';

interface SocialLinksProps {
  link: string;
  platform: string;
}

const Link = styled.a`
  display: flex;
  place-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-size: ${pxToRem(14)};
  /* background: none; */
  margin: ${pxToRem(20)} ${pxToRem(10)} 0;
  /* padding: 0.6rem 1.2rem; */
  /* letter-spacing: 0.05rem; */
  /* border: 1px solid; */
  cursor: pointer;
`;

const Icon = styled(SvgIcon)`
  fill: ${(props) => props.theme.colors.primary};
  transition: all ease-in-out 0.2s;
  &:hover {
    fill: ${(props) => props.theme.colors.action};
  }
  /* margin-left: 10px; */
`;

/* Note: Could declare props directly in function but it0s cleaner with interface
https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components
 */
const SocialLinks = ({ link, platform }: SocialLinksProps): JSX.Element => {
  return (
    <Link href={link} target='_blank'>
      <Icon platform={platform} />
    </Link>
  );
};

export default SocialLinks;
