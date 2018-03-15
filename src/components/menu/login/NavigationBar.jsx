import React from 'react';
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

  export default class NavigationBar extends React.Component {
    constructor(props) {
      super(props);
      this.userName
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
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
                  <NavLink href="">  sad</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="">asa  </NavLink>
                </NavItem>
                <NavItem>
                  <Button id="signOut" href="">Logout</Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }