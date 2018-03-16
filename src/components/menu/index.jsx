import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, Switch } from 'react-router-dom';
import DailyImg from './dailyImg';
import SearchImg from './images';
import { ShowNews } from './news'
import firebase, { auth, provider } from './../services/configFirebase';
import './../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Button, Collapse, Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import './news/styles.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      isOpen: false      
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  logout() {
    auth.signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
  };
  login() {
    auth.signInWithPopup(provider) 
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
  };
  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } 
    });
  };

  render() {
    return (
      
      <div className="app"> 
        
        {this.state.user ? (
          
        <Router>
          <div>
          <Navbar color="faded" light expand="md">
            <NavItem><Link to="/DailyImg">NASA</Link></NavItem>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-left" navbar>
                <NavItem className="links"><Link to="/SearchImg">Images</Link></NavItem>
                <NavItem className="links" id="newsLink" href=""><Link to="/ShowNews">News</Link></NavItem>
              </Nav>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink className="nav-item active" id="user-pic"><img className="rounded-circle userImg" src={this.state.user.photoURL} alt="user"/></NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">{this.state.user.displayName} </NavLink>
                </NavItem>
                <NavItem>
                  <Button id="signOut" className="btn btn-primary my-2 my-sm-0" onClick={this.logout}>Logout</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Route path="/DailyImg" component={DailyImg}></Route>
          <Route path="/ShowNews" component={ShowNews}></Route>
          <Route path="/SearchImg" component={SearchImg}></Route>
          </div>
        </Router>
        ) : (     
          <header className="signInContainer mx-auto" id="signInContainer">
            <div className="container">
              <div className="card text-center align-middle">
                <div className="card-header">
                </div>
                <div className="card-body">
                  <h5 className="card-title">Welcome to NASA</h5>
                  <p className="card-text">You need to be logged to view this site.</p>
                  <button id="sign-in" className="btn btn-primary" onClick={this.login}>Sign-in with Google</button>
                </div>
                <div className="card-footer text-muted">
                </div>
              </div>
            </div>
          </header>
        )}
      </div>
    );
  }
}

Login.propTypes = {
  
};

export default Login;
