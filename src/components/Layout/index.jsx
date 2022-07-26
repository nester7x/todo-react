import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as S from './styles';

import { GlobalContext } from '../../context/global';
import { deleteCookie } from '../../utils/CookieUtils';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const { isLogin } = useContext(GlobalContext);

  const onLogOut = () => {
    deleteCookie('token', '/', 'localhost');
    window.location.reload();
  };

  const links = [
    {
      component: <NavLink to="">Home</NavLink>,
      isLogin: 'general',
      key: 1
    },
    {
      component: <NavLink to="login">Login</NavLink>,
      isLogin: 'loggedOut',
      key: 2
    },
    {
      component: <NavLink to="registration">Registration</NavLink>,
      isLogin: 'loggedOut',
      key: 3
    },
    {
      component: <NavLink to="users">Users</NavLink>,
      isLogin: 'loggedIn',
      key: 4
    }
  ];

  return (
    <S.Wrapper open={open}>
      <S.Header>
        <S.Title>Header</S.Title>
        {isLogin && <S.LogOut onClick={onLogOut}>LogOut</S.LogOut>}
      </S.Header>

      <S.Aside open={open}>
        <S.ToggleButton onClick={toggleDrawer}>
          <span />
        </S.ToggleButton>

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
      </S.Aside>

      <S.Main>{children}</S.Main>
    </S.Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
