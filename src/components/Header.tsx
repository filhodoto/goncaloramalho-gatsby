import React, { FC } from 'react';
import styled, { withTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/macro';
import { pxToRem } from 'helpers/generic';
import Switch from 'react-switch';
import { toggleTheme } from 'state/actions';
import { State } from 'state/reducer';
import { useDispatch, useSelector } from 'react-redux';

const HeaderStyled = styled.header`
  height: ${pxToRem(30)};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Header: FC<{ theme: DefaultTheme }> = ({ theme }): JSX.Element => {
  const isDarkMode = useSelector<State, State['darkmode']>(
    (state) => state.darkmode
  );
  const dispatch = useDispatch();

  const handleSwitchChange = () => {
    dispatch(toggleTheme(!isDarkMode));
  };

  return (
    <HeaderStyled>
      <span
        css={`
          margin-right: ${pxToRem(10)};
          font-size: ${pxToRem(13)};
        `}
      >
        too {isDarkMode ? 'dark' : 'light'}?
      </span>
      <Switch
        onChange={handleSwitchChange}
        height={20}
        width={40}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={theme.colors.primary}
        offColor={theme.colors.primary}
        offHandleColor={theme.colors.text}
        onHandleColor={theme.colors.text}
        checked={isDarkMode}
      />
    </HeaderStyled>
  );
};

// Use withTheme so we can use theme props inside JSX
export default withTheme(Header);
