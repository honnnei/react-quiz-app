
import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavigationBar = (props) => {
 

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">QuizName</NavbarBrand>
          <Nav className="mr-auto" >
            <NavItem>
              <NavLink href="/">New Game</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

