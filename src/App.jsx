import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from './components/Layout';
import AppRoutes from './routes/Routes';
import { GlobalContextProvider } from './context/global';
import { GlobalAuthProvider } from './context/authContext';

const App = () => (
  <GlobalAuthProvider>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
      <GlobalContextProvider>
        <Router>
          <Layout>{AppRoutes()}</Layout>
        </Router>
      </GlobalContextProvider>
    </GoogleOAuthProvider>
  </GlobalAuthProvider>
);

export default App;
