import React, { Component } from 'react';
import firebase, { auth, provider } from './../../services/configFirebase';
// import PropTypes from 'prop-types';
// import NavigationBar from './NavigationBar';
import './../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import './styles.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      user: null,
      isOpen: false
      
    }
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this); 
    this.logout = this.logout.bind(this); 

    this.userName
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

<Navbar color="faded" light expand="md">
<NavbarBrand href="/">Nasa</NavbarBrand>
<NavbarToggler onClick={this.toggle} />
<Collapse isOpen={this.state.isOpen} navbar>
<Nav className="ml-left" navbar>
    <NavItem>
      <NavLink className="links" href="#">Images</NavLink>
    </NavItem>
    <NavItem>
      <NavLink className="links" id="newsLink" href="">News</NavLink>
    </NavItem>
  </Nav>
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink className="nav-item active" id="user-pic"><img className="rounded-circle userImg" src={this.state.user.photoURL} /></NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="">{this.state.user.displayName} </NavLink>
    </NavItem>
    <NavItem>
      <Button  id="signOut" className="btn btn-primary my-2 my-sm-0" onClick={this.logout}>Logout</Button>
    </NavItem>
  </Nav>
</Collapse>
</Navbar>

          // <nav className="navbar navbar-expand-lg navbar-light">
          //   <a className="navbar-brand" href="#">Nasa</a>
          //   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          //     <span className="navbar-toggler-icon"></span>
          //   </button>
          //   <div className="collapse navbar-collapse" id="navbarSupportedContent">
          //     <ul className="navbar-nav mr-auto">
          //       <li className="nav-item active">
          //         <a className="nav-link" href="#">Images</a>
          //       </li>
          //       <li className="nav-item">
          //         <a className="nav-link" href="#">News</a>
          //       </li>
          //     </ul>
          //     <ul className="navbar-nav mr-auto offset-lg-6">
          //       <li className="nav-item active" id="user-pic"><img className="rounded-circle userImg" src={this.state.user.photoURL} /></li>
          //       <li className="nav-item active" id="user-name">{this.state.user.displayName} </li>
          //       <li className="nav-item active">
          //         <button id="signOut" className="btn btn-primary my-2 my-sm-0" onClick={this.logout}>Logout</button>
          //       </li>
          //     </ul>
          //   </div>
          // </nav>
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

// ForecastExtended.propTypes = {
//   city: PropTypes.string.isRequired,
// }

export default Login;
