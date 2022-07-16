import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Header,
  Title,
  Aside,
  ToggleButton,
  Main,
  LogOut,
  MenuItem
} from './styles';
import { GlobalContext } from '../../context/global';
import { setCookie } from '../../utils/CookieUtils';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const { isLogin } = useContext(GlobalContext);

  const onLogOut = () => {
    setCookie('token', '', 1);
    window.location.reload();
  };

  return (
    <Wrapper open={open}>
      <Header>
        <Title>Header</Title>
        {isLogin && <LogOut onClick={onLogOut}>LogOut</LogOut>}
      </Header>

      <Aside open={open}>
        <ToggleButton onClick={toggleDrawer}>
          <span />
        </ToggleButton>
        <ul>
          <MenuItem>
            {!isLogin && <NavLink to="login">Login</NavLink>}
            {!isLogin && <NavLink to="registration">Registration</NavLink>}
            <NavLink to="">Home</NavLink>
            {isLogin && <NavLink to="users">Users</NavLink>}
          </MenuItem>
        </ul>
      </Aside>

      <Main>{children}</Main>
    </Wrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired
};

export default Layout;
