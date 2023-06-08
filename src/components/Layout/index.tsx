import React, { FC, ReactNode, useContext } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import Logo from 'assets/Images/logo.svg';
import { showComponents } from 'utils/showComponents.Utils';
import { AuthContext } from 'context/authContext';

import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const { loginState, logout } = useContext(AuthContext);

  const links = [
    {
      component: <S.Link to=''>Feed</S.Link>,
      isLogin: 'loggedIn',
      key: 'feed',
    },
    {
      component: <S.Link to='chat'>Chat</S.Link>,
      isLogin: 'loggedIn',
      key: 'chat',
    },
    {
      component: <S.Link to='my-profile'>My profile</S.Link>,
      isLogin: 'loggedIn',
      key: 'myProfile',
    },
    {
      component: (
        <S.LogOut onClick={() => logout()}>
          <LogoutOutlinedIcon />
        </S.LogOut>
      ),
      isLogin: 'loggedIn',
      key: 'logout',
    },
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInner>
          <NavLink to='/'>
            <img src={Logo} alt='logo icon' />
          </NavLink>
          <S.Menu>
            {loginState.isLoggedIn
              ? links.map((item) => (
                  <S.MenuItem key={item.key} data-hover={item.key}>
                    {location.pathname.split('/')[1] !== item.component.props.to
                      ? showComponents(loginState.isLoggedIn, item.isLogin, item.component)
                      : ''}
                  </S.MenuItem>
                ))
              : ''}
          </S.Menu>
        </S.HeaderInner>
      </S.Header>

      <S.Main>
        <S.MainContainer>{children}</S.MainContainer>
      </S.Main>
    </S.Wrapper>
  );
};

export default Layout;
