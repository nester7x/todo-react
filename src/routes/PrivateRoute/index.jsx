import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../context/global';

function PrivateRoute({ children }) {
  const location = useLocation();
  const url = new URLSearchParams();
  url.set('redirect', location.pathname + location.search);
  const { isLogin } = useContext(GlobalContext);

  return isLogin ? (
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
