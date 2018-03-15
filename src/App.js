import React, { Component } from 'react';
import firebase, { auth, provider } from './components/services/configFirebase';
import Login from './components/menu/login/index'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Login />
      </div>
    );
  }
}

export default App;