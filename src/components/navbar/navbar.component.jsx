import React, { useState, useRef } from "react";
import { useOnClckOutside } from "../../hooks/useOnClickOutside";

import {
  NavbarContainer,
  NavbarMainContainer,
  MenuList,
  MenuListWrapper,
  Signature,
  PictureOfMe,
  MenuListItem,
  BackgroundForMobileNav,
  BackgroundForMobileList,
  MobileListItem,
  BackgroundNav,
  AnimatedHref,
  NavbarDiv,
  MenuListFooter,
  MenuLink
} from "./navbar.styles";
import Hamburger from "../hamburger/hamburger.component";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();
  useOnClckOutside(node, () => setIsOpen(false));

  return (
    <NavbarContainer isOpen={isOpen}>
      <NavbarDiv>
        <NavbarMainContainer>
          <PictureOfMe></PictureOfMe>
          <Signature>Bartosz Słysz</Signature>
        </NavbarMainContainer>
        <MenuListWrapper>
          <MenuList>
            <MenuListItem>
              <MenuLink to="/Portfolio">About Me</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/realizations">Realizations</MenuLink>
            </MenuListItem>
            <MenuListItem>
              <MenuLink to="/timeline">Timeline</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuListWrapper>
        <MenuListFooter>
          <MenuList>
            <MenuListItem>
              <MenuLink to="/">Contact Me</MenuLink>
            </MenuListItem>
          </MenuList>
        </MenuListFooter>
      </NavbarDiv>

      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      <BackgroundForMobileNav isOpen={isOpen} />
      <BackgroundNav isOpen={isOpen}>
        <BackgroundForMobileList isOpen={isOpen}>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} to="/Portfolio">About Me</AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} to="/realizations">Realizations</AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} to="/timeline">Timeline</AnimatedHref>
          </MobileListItem>
          <MobileListItem isOpen={isOpen}>
            <AnimatedHref>Contact</AnimatedHref>
          </MobileListItem>
        </BackgroundForMobileList>
      </BackgroundNav>
    </NavbarContainer>
  );
};

export default Navbar;
