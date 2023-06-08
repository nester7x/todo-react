import React, { FC, ReactNode, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';

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
      component: (
        <S.Link to='registration'>
          <PersonAddIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 'registration',
    },
    {
      component: (
        <S.Link to='login'>
          <LoginIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 'login',
    },
    {
      component: (
        <S.Link to='chat'>
          <ChatIcon />
        </S.Link>
      ),
      isLogin: 'loggedIn',
      key: 'chat',
    },
    {
      component: (
        <S.Link to='users'>
          <GroupIcon />
        </S.Link>
      ),
      isLogin: 'loggedIn',
      key: 'users',
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
          <S.Title>
            {location.pathname.substring(1) === '' ? 'home' : location.pathname.split('/')[1]}
          </S.Title>
          <S.Menu>
            {links.map((item) => (
              <S.MenuItem key={item.key} data-hover={item.key}>
                {location.pathname.split('/')[1] !== item.component.props.to
                  ? showComponents(loginState.isLoggedIn, item.isLogin, item.component)
                  : ''}
              </S.MenuItem>
            ))}
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
