// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
var firebaseConfig = {
  apiKey: 'AIzaSyC-Zvg8oxhkuSVxhRpmz-xYQchmfWMMt0I',
  authDomain: 'circle-5da82.firebaseapp.com',
  projectId: 'circle-5da82',
  storageBucket: 'circle-5da82.appspot.com',
  messagingSenderId: '536294972621',
  appId: '1:536294972621:web:008fd689a93422e6f95d84'
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log('Received background message ', payload);
  const audio = new Audio('https://github.com/mhd-shibil/circle/blob/develop/src/assets/notificacion.mp3');

  audio.play();

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
