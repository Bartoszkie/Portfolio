import React from "react";
import { HamburgerContainer } from "./hamburger.styles";

const Hamburger = ({ isopen, setIsOpen }) => {
  return (
    <HamburgerContainer name="mobile-button" isopen={isopen} onClick={() => setIsOpen(!isopen)}>
      <i className="fas fa-bars"></i>
    </HamburgerContainer>
  );
};

export default Hamburger;
