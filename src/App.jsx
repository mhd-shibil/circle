import { getToken, onMessageListener } from './firebase';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from 'store/store';
import { RouteLayout } from './routes';
import NotificationSound from 'assets/notificacion.mp3';
import useSound from 'use-sound';

import './styles/global.css';
import { showSuccessToast } from 'utils/toast.util';

const App = () => {
  const [, setTokenFound] = useState(false);
  const [play] = useSound(NotificationSound);

  const [, setShow] = useState(false);
  const [, setNotification] = useState({ title: '', body: '' });

  getToken(setTokenFound);

  onMessageListener()
    .then((payload) => {
      setShow(true);
      setNotification({ title: payload.notification.title, body: payload.notification.body });
      play();
      showSuccessToast(payload?.notification?.title);
      console.log(payload);
    })
    .catch((err) => console.log('failed: ', err));

  // inside the jsx being returned:

  return (
    <Provider store={store}>
      <Router>
        <RouteLayout />
      </Router>
    </Provider>
  );
};

export default App;
