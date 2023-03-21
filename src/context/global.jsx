import React, { createContext } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = createContext();

const { Provider } = GlobalContext;

export const GlobalContextProvider = ({ children }) => (
  <Provider value={null}>{children}</Provider>
);

GlobalContextProvider.propTypes = {
  children: PropTypes.element.isRequired
};
