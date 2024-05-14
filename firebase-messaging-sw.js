importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/10.11.1/firebase-messaging.js');

/*Update with yours config*/
const firebaseConfig = {
    apiKey: "AIzaSyAq_QY34h7BGOcp8go4IU20Kf3L9br1Ix8",
    authDomain: "beowned-1aee2.firebaseapp.com",
    projectId: "beowned-1aee2",
    storageBucket: "beowned-1aee2.appspot.com",
    messagingSenderId: "489127935137",
    appId: "1:489127935137:web:0fac9e839a7e611a5004e0",
    measurementId: "G-M2T1TWLS02",
};
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

/*messaging.onMessage((payload) => {
console.log('Message received. ', payload);*/
messaging.onBackgroundMessage(function (payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});