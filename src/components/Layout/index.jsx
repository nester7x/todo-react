import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import useAuth from "../../hooks/useAuth";
import { Wrapper, Header, Title, Aside, ToggleButton, Main } from './styles';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);

  const auth = useAuth();

  return (
    <Wrapper open={open}>
      <Header>
        <Title>Header</Title>
      </Header>

      <Aside open={open}>
        <ToggleButton onClick={toggleDrawer}>
          <span />
        </ToggleButton>
        <ul>
          <li>
            {!auth?.user &&
              <>
                <NavLink to="login">Login</NavLink>
                <br/>
                <NavLink to="register">Register</NavLink>
                <br />
              </>
            }
            <NavLink to="">Home</NavLink>
            <br />
            {auth?.user && <NavLink to="users">Users</NavLink>}
          </li>
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
