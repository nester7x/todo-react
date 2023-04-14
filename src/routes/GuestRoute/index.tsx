import React, { ReactNode, useContext } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AuthContext } from 'context/authContext';

type GuestRouteProps = {
  children: ReactNode;
};

const GuestRoute = ({ children }: GuestRouteProps): JSX.Element | any => {
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));
  const { loginState } = useContext(AuthContext);

  if (loginState.isLoggedIn) {
    return <Navigate to={url.get('redirect') || '/'} />;
  } else {
    return children;
  }
};

export default GuestRoute;
