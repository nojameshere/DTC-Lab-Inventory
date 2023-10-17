import './App.css';
import LogInPage from './pages/LogInPage.js';
import Main from './pages/Main.js'
import React from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  //firebase config needs to be put here. This will be done in a .env file and will
  //need to be otained from George Ray
  //doing config like this is secure, if you ever fork and re-upload to github please
  //make sure your .env file is on your gitignore list.
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_DB_URL}`,
  projectID: `${process.env.REACT_APP_PROJECT_ID}`,
  storageBucket: `${process.env.REACT_APP_STORAGE_BUCKET}`,
  messageSenderID: `${process.env.REACT_APP_APP_MESS_SEND_ID}`,
  appId: `${process.env.REACT_APP_APP_ID}`,
  measurementId: `${process.env.REACT_APP_MEASUREMENT_ID}`
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


function App() {
  var loggedIn = () => {

    //this needs to be updated once a more secure auth process is set up
    if(localStorage.getItem('accessToken') !== null){
      return true;
    }
    else{return false;}
  }


  return (
    <div className="App">
      <div className='appContainer'>
        {loggedIn && <LogInPage />}
        {loggedIn && <Main />}
      </div>
    </div>
  );
}

export default App;
