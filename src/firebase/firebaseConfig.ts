// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.STICKINGS_BUILDER_API_KEY,
  authDomain: process.env.STICKINGS_BUILDER_AUTH_DOMAIN,
  projectId: process.env.STICKINGS_BUILDER_PROJECT_ID,
  storageBucket: process.env.STICKINGS_BUILDER_STORAGE_BUCKET,
  messagingSenderId: process.env.STICKINGS_BUILDER_MESSAGING_SENDER_ID,
  appId: process.env.STICKINGS_BUILDER_APP_ID,
  measurementId: process.env.STICKINGS_BUILDER_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
