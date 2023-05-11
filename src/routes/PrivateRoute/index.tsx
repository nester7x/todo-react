import React, { ReactNode, useContext, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

type PrivateRouteProps = {
  children: ReactNode;
};

const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element | any => {
  const location = useLocation();
  const url = new URLSearchParams();
  url.set('redirect', location.pathname + location.search);
  const { loginState } = useContext(AuthContext);

  useEffect(() => {
    if (!loginState.isLoggedIn) {
      window.location.href = `/login?${url.toString()}`;
    }
  }, [loginState.isLoggedIn, url]);

  if (loginState.isLoggedIn) {
    return children;
  } else {
    return (
      <Navigate
        to={{
          pathname: '/login',
          search: url.toString(),
        }}
      />
    );
  }
};

export default PrivateRoute;
