import React, { useState, useEffect } from "react";
//reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavLink,
  UncontrolledDropdown,
  Button,
} from "reactstrap";

// translation
import { useTranslation } from "react-i18next";
// logo

import { settingsStore } from "store/settingsStore";
import { Link } from "react-router-dom";
const dropdwonItems = [
  "Product",
  "Solutions",
  "Resources",
  "Enterprise",
  "Pricing",
];
function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggle = () => setIsOpen(!isOpen);
  const { t, i18n } = useTranslation("navbar");

  const [direction, setDirection] = settingsStore((state) => [
    state.direction,
    state.setDirection,
  ]);

  const toggleLang = () => {
    setDirection(direction === "ltr" ? "rtl" : "ltr");
    i18n.changeLanguage(direction === "ltr" ? "ar" : "en");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav>
      <Navbar expand="lg" className="px-3 bg-dark rounded-4 mb-3">
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
