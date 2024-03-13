import React, { useState, useEffect } from "react";
//* reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav>
      <Navbar expand="lg" className="px-3 bg-dark rounded-4 my-3 ">
        <NavbarBrand href="/"></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/" className="text-white">
                Game
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/saved" className="text-white">
                saved Games
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </nav>
  );
}

export default NavBar;
