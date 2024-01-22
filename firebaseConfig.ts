import { initializeApp } from 'firebase/app'
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth'
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdqIdCHbUoISe0dYB8QDIoJKwjTL2e_5U",
  authDomain: "ravebae-gg.firebaseapp.com",
  projectId: "ravebae-gg",
  storageBucket: "ravebae-gg.appspot.com",
  messagingSenderId: "119529401610",
  appId: "1:119529401610:web:2b0200ddb51c790910def3",
  measurementId: "G-WGGKYDKDMZ"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
initializeAuth(FIREBASE_APP, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
 