import React from "react";
import { HamburgerContainer } from "./hamburger.styles";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <HamburgerContainer name="mobile-button" isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <i class="fas fa-bars"></i>
    </HamburgerContainer>
  );
};

export default Hamburger;
