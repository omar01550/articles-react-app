import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot, query, where } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-firestore.js';

const firebaseConfig = {
  apiKey: "AIzaSyDnXr8xTrN4wzE0KATdApn9215NaoVpPaw",
  authDomain: "react-news-app-dd254.firebaseapp.com",
  databaseURL: "https://react-news-app-dd254-default-rtdb.firebaseio.com",
  projectId: "react-news-app-dd254",
  storageBucket: "react-news-app-dd254.appspot.com",
  messagingSenderId: "850981220758",
  appId: "1:850981220758:web:0404a4e782a3157fd7adb7",
  measurementId: "G-N10P6JHQ27"
};

const firebaseApp = initializeApp(firebaseConfig);


export const firebaseContext = createContext();





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <firebaseContext.Provider value={firebaseApp} >
      <App />
    </firebaseContext.Provider>

  </React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
