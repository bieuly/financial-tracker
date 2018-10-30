import * as firebase from 'firebase/app';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Router } from 'react-router-dom';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const fireBaseConfig = {
  apiKey: "AIzaSyDegmviWIch2x9LZyoLmtNVgPggoJ50qq4",
  authDomain: "financial-tracker-aeb2e.firebaseapp.com",
  databaseURL: "https://financial-tracker-aeb2e.firebaseio.com",
  messagingSenderId: "465375931644",
  projectId: "financial-tracker-aeb2e",
  storageBucket: "financial-tracker-aeb2e.appspot.com"
}

const browserHistory = createBrowserHistory()

firebase.initializeApp(fireBaseConfig)

ReactDOM.render(
  <Router history={browserHistory}>
    <App />
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
