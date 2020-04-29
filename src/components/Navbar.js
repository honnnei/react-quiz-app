
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const NavigationBar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">QuizName</NavbarBrand>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <NavLink href="/newgame/">New Game</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/pastscores">Past Scores</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;

