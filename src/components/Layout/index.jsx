import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PropTypes from 'prop-types';
import * as S from './styles';

import { GlobalContext } from '../../context/global';
import { deleteCookie } from '../../utils/CookieUtils';

const Layout = ({ children }) => {
  const { isLogin } = useContext(GlobalContext);
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
      key: 1
    },
    {
      component: (
        <S.Link to="registration">
          <PersonAddIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 2
    },
    {
      component: (
        <S.Link to="login">
          <LoginIcon />
        </S.Link>
      ),
      isLogin: 'loggedOut',
      key: 3
    },
    {
      component: (
        <S.Link to="users">
          <GroupIcon />
        </S.Link>
      ),
      isLogin: 'loggedIn',
      key: 4
    },
    {
      component: (
        <S.LogOut onClick={onLogOut}>
          <LogoutOutlinedIcon />
        </S.LogOut>
      ),
      isLogin: 'loggedIn',
      key: 5
    }
  ];

  return (
    <S.Wrapper>
      <S.Header>
        <S.HeaderInner>
          <S.Title>
            {location.pathname.substring(1) === ''
              ? 'home'
              : location.pathname.substring(1)}
          </S.Title>
          <S.Menu>
            {links.map((item) => {
              if (item.isLogin === 'general') {
                return <li key={item.key}>{item.component}</li>;
              }
              if (isLogin && item.isLogin === 'loggedIn') {
                return <li key={item.key}>{item.component}</li>;
              }
              if (!isLogin && item.isLogin === 'loggedOut') {
                return <li key={item.key}>{item.component}</li>;
              }
              return '';
            })}
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
