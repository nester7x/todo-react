import React, { useContext, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from 'context/authContext';

function PrivateRoute({ children }) {
  const location = useLocation();
  const url = new URLSearchParams();
  url.set('redirect', location.pathname + location.search);
  const { loginState } = useContext(AuthContext);

  useEffect(() => {
    if (!loginState.isLoggedIn) {
      window.location.href = `/login?${url.toString()}`;
    }
  }, [loginState.isLoggedIn, url]);

  return loginState.isLoggedIn ? (
    children
  ) : (
    <Navigate
      to={{
        pathname: '/login',
        search: url.toString()
      }}
    />
  );
}

PrivateRoute.propTypes = {
  children: PropTypes.element.isRequired
};

PrivateRoute.propType = {
  children: PropTypes.element
};

export default PrivateRoute;
