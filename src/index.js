import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from '@firebase/app-compat'
import "firebase/firestore";
import "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from 'firebase/app';

const firebaseConfig={
  apiKey: "AIzaSyBDRcXIw7FDaVIDmRgcrUNeJC4WZL8EIdA",
  authDomain: "test-react-cdabe.firebaseapp.com",
  projectId: "test-react-cdabe",
  storageBucket: "test-react-cdabe.appspot.com",
  messagingSenderId: "849634998954",
  appId: "1:849634998954:web:e363c92eb5dfd226316ed3",
  measurementId: "G-WGM625DHR0",
};
initializeApp(firebaseConfig);
export const Context = createContext(null);

const firestore = getFirestore();
const auth = getAuth();

ReactDOM.render(
  <Context.Provider
    value={{
      firebase,
      auth,
      firestore,
    }}
  >
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
