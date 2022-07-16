import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './components/Layout';
import AppRoutes from './routes/Routes';
import { GlobalContextProvider } from './context/global';

const App = () => (
  <GlobalContextProvider>
    <Router>
      <Layout>{AppRoutes()}</Layout>
    </Router>
  </GlobalContextProvider>
);

export default App;
