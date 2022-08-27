import { initializeApp } from 'firebase/app';
import { getMessaging, getToken as getFirebaseToken, onMessage } from 'firebase/messaging';
const firebaseConfig = {
  apiKey: 'AIzaSyC-Zvg8oxhkuSVxhRpmz-xYQchmfWMMt0I',
  authDomain: 'circle-5da82.firebaseapp.com',
  projectId: 'circle-5da82',
  storageBucket: 'circle-5da82.appspot.com',
  messagingSenderId: '536294972621',
  appId: '1:536294972621:web:008fd689a93422e6f95d84'
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
  });

export const getToken = () => {
  return getFirebaseToken(messaging, {
    vapidKey: 'BPVhJSWenD8wsBrcdt3CHzQVLdr7cDxAknXlz7TseGZL1EJ1OamWLyPURDhztxjxsRdbfxDlsKm5Zu2Fu9e8jM8'
  })
    .then((currentToken) => {
      if (currentToken) {
        console.log('current token for client: ', currentToken);

        return currentToken;
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
      } else {
        console.log('No registration token available. Request permission to generate one.');

        return '';
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log('An error occurred while retrieving token. ', err);

      return '';
      // catch error while creating client token
    });
};
