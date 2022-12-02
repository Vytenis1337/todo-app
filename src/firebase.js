import { initializeApp } from 'firebase/app';

import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: 'fir-todo-app-5c735.firebaseapp.com',
  projectId: 'fir-todo-app-5c735',
  storageBucket: 'fir-todo-app-5c735.appspot.com',
  messagingSenderId: '135694586873',
  appId: '1:135694586873:web:d9a5f13714cf97ede5e328',
  measurementId: 'G-QBJSDNV532',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
