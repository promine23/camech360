import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Barra from './Barra';
import './App.css';
import Login from './Login';
import firebaseConfig from './firebase-config';
import{
  FirebaseAppProvider
} from 'reactfire';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <App />
 
  </ FirebaseAppProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
