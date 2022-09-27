import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import ChatIcon from '@mui/icons-material/Chat';
import PropTypes from 'prop-types';

import { GlobalContext } from 'context/global';
import { deleteCookie } from 'utils/CookieUtils';
import { showComponents } from 'utils/ShowComponents.Utils';
import * as S from './styles';

const Layout = ({ children }) => {
  const { user } = useContext(GlobalContext);
  const location = useLocation();

  const onLogOut = () => {
    deleteCookie('token', '/', 'localhost');
    window.location.reload();
  };

  const links = [
    {
      component: (
        <S.Link to="">
          <HomeIcon />
        </S.Link>
      ),
      isLogin: 'general',
      key: 'home'
    },
    {
      component: (
        <S.Link to="registration">
          <PersonAddIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 'registration'
    },
    {
      component: (
        <S.Link to="login">
          <LoginIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 'login'
    },
    {
      component: (
        <S.Link to="chat">
          <ChatIcon />
        </S.Link>
      ),
      isLogin: 'loggedIn',
      key: 'chat'
    },
    {
      component: (
        <S.Link to="users">
          <GroupIcon />
        </S.Link>
      ),
      isLogin: 'loggedIn',
      key: 'users'
    },
    {
      component: (
        <S.LogOut onClick={onLogOut}>
          <LogoutOutlinedIcon />
        </S.LogOut>
      ),
      isLogin: 'loggedIn',
      key: 'logout'
    }
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInner>
          <S.Title>
            {location.pathname.substring(1) === ''
              ? 'home'
              : location.pathname.split('/')[1]}
          </S.Title>
          <S.Menu>
            {links.map((item) => (
              <S.MenuItem key={item.key} data-hover={item.key}>
                {showComponents(user.isLogin, item.isLogin, item.component)}
              </S.MenuItem>
            ))}
          </S.Menu>
        </S.HeaderInner>
      </S.Header>

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
