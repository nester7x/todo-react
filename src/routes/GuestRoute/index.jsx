import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { GlobalContext } from 'context/global';

function GuestRoute({ children }) {
  const location = useLocation();
  const url = new URLSearchParams(location.search.slice(1));
  const { user } = useContext(GlobalContext);

  return user.isLogin ? <Navigate to={url.get('redirect') || '/'} /> : children;
}

GuestRoute.propTypes = {
  children: PropTypes.element.isRequired
};

export default GuestRoute;
