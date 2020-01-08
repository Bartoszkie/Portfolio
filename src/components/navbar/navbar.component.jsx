import React, { useState } from "react";
import {
  NavbarContainer,
  NavbarMainContainer,
  MenuList,
  MenuListWrapper,
  Signature,
  PictureOfMe,
  MenuListItem,
  MenuListHref,
  BackgroundForMobileNav,
  BackgroundForMobileList,
  MobileListItem,
  BackgroundNav, 
  AnimatedHref
} from "./navbar.styles";
import Hamburger from "../hamburger/hamburger.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarMainContainer>
        <PictureOfMe></PictureOfMe>
        <Signature>Bartosz Słysz</Signature>
      </NavbarMainContainer>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BackgroundForMobileNav isOpen={isOpen}/>
        <BackgroundNav isOpen={isOpen}>
          <BackgroundForMobileList>
            <MobileListItem>
              <AnimatedHref>O mnie</AnimatedHref>
            </MobileListItem>
            <MobileListItem>
              <AnimatedHref>Timeline</AnimatedHref>
            </MobileListItem>
          </BackgroundForMobileList>
        </BackgroundNav>
    </NavbarContainer>
  );
};

export default Navbar;
