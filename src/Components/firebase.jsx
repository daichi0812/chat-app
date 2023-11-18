import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAEWvOQg8SscfIuhHUDkrQ_S8cxeGwqy0s",
    authDomain: "chat-app-fa559.firebaseapp.com",
    projectId: "chat-app-fa559",
    storageBucket: "chat-app-fa559.appspot.com",
    messagingSenderId: "337007651039",
    appId: "1:337007651039:web:61f7b42cdf6d37e6eaa16a",
    measurementId: "G-S5BRPM8GRC"
})

// データベースを使う
const db = firebaseApp.firestore();

// 認証機能(auth)を使う
const auth = firebase.auth();

export{db, auth};