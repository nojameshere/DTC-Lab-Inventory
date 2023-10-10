import './App.css';
import LogInPage from './pages/LogInPage.js';
import Main from './pages/Main.js'
import React from 'react';
function App() {
  var loggedIn = false;


  return (
    <div className="App">
      {!loggedIn && <LogInPage />}
      {loggedIn && <Main />}
    </div>
  );
}

export default App;
