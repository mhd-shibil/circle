import { onMessageListener } from './firebase';
import { RouteLayout } from './routes';
import NotificationSound from 'assets/notificacion.mp3';
import useSound from 'use-sound';

import './styles/global.css';
import { showSuccessToast } from 'utils/toast.util';
import { useState } from 'react';
import { useApolloClient } from '@apollo/client';

const App = () => {
  const [play] = useSound(NotificationSound);
  const [, setNotifications] = useState();
  const client = useApolloClient();

  onMessageListener()
    .then((payload) => {
      client?.refetchQueries({ include: 'active' });
      play();
      showSuccessToast(payload?.notification?.title);
      setNotifications(payload?.notification?.title);
      console.log(payload);
    })
    .catch((err) => console.log('failed: ', err));

  // inside the jsx being returned:

  return <RouteLayout />;
};

export default App;
