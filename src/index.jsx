import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { RecoilRoot } from 'recoil';
import { Provider } from 'react-redux';
import store from 'store/store';
import { HashRouter as Router } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'https://1fb2-103-142-31-94.in.ngrok.io/graphql',
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RecoilRoot>
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </RecoilRoot>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
