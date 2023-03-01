import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Layout from './components/Layout';
import AppRoutes from './routes/Routes';
import { GlobalContextProvider } from './context/global';

const App = () => (
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID}>
    <GlobalContextProvider>
      <Router>
        <Layout>{AppRoutes()}</Layout>
      </Router>
    </GlobalContextProvider>
  </GoogleOAuthProvider>
);

export default App;
