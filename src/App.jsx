import { onMessageListener } from './firebase';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from 'store/store';
import { RouteLayout } from './routes';
import NotificationSound from 'assets/notificacion.mp3';
import useSound from 'use-sound';
import { RecoilRoot } from 'recoil';

import './styles/global.css';
import { showSuccessToast } from 'utils/toast.util';
import { useState } from 'react';

const App = () => {
  const [play] = useSound(NotificationSound);
  const [, setNotifications] = useState();

  onMessageListener()
    .then((payload) => {
      play();
      showSuccessToast(payload?.notification?.title);
      setNotifications(payload?.notification?.title);
      console.log(payload);
    })
    .catch((err) => console.log('failed: ', err));

  // inside the jsx being returned:

  return (
    <RecoilRoot>
      <Provider store={store}>
        <Router>
          <RouteLayout />
        </Router>
      </Provider>
    </RecoilRoot>
  );
};

export default App;
