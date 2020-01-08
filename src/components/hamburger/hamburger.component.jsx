import React from "react";
import { HamburgerContainer, HamburgerDash } from "./hamburger.styles";

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <HamburgerContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <HamburgerDash isOpen={isOpen}/>
      <HamburgerDash isOpen={isOpen}/>
      <HamburgerDash isOpen={isOpen}/>
    </HamburgerContainer>
  );
};

export default Hamburger;
