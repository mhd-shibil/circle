import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from 'store/store';
import { RouteLayout } from './routes';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <RouteLayout />
      </Router>
    </Provider>
  );
};

export default App;
