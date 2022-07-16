import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { getCookie } from 'utils/CookieUtils';
import PropTypes from 'prop-types';

function PrivateRoute({ children }) {
  const location = useLocation();
  const url = new URLSearchParams();
  url.set('redirect', location.pathname + location.search);

  return getCookie('token') ? (
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
