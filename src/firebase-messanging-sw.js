importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.0.0/firebase-messaging.js.js')


firebaseApiOrigin.initializeApp({
  apiKey: "AIzaSyD42j6S5p0yitIEzH1Y_auUI3E0X_TSBzQ",
  authDomain: "test-notification-ab113.firebaseapp.com",
  databaseURL: "https://test-notification-ab113-default-rtdb.firebaseio.com",
  projectId: "test-notification-ab113",
  storageBucket: "test-notification-ab113.appspot.com",
  messagingSenderId: "827751665104",
  appId: "1:827751665104:web:327c70a14619b42baf7dd5",
  measurementId: "G-3Q8JSHXB6B"
})


const messaging = firebase.messaging()
