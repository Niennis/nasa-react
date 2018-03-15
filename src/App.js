import React, { Component } from 'react';
// import firebase, { auth, provider } from './components/services/configFirebase';
import Login from './components/menu/login/index'
// import ShowNews from './components/menu/news'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Button, Collapse, Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="app">
        <Login />
        {/* <ShowNews /> */}
      </div>
    );
  }
}

export default App;